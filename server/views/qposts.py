from schema import Schema, And

import utils
from app import app
from flask import jsonify, request
from models import Qpost, User, Comment
from mongoengine.errors import ValidationError
from authorization import login_required


@app.route("/api/qposts")
def qposts_index():
    qposts = Qpost.objects().order_by("-created")
    print (jsonify([qpost.to_public_json() for qpost in qposts]))
    return jsonify([qpost.to_public_json() for qpost in qposts])


@app.route("/api/qposts", methods=["POST"])
@login_required
def qposts_create(username: str):
    schema = Schema({
        "title": And(str, len, error="Title not specified"),
        "content": And(str, len, error="Content not specified"),
    })
    form = {
        "title": request.form.get("title"),
        "content": request.form.get("content")
    }
    validated = schema.validate(form)

    user = User.objects(username=username).first()

    qpost = Qpost(
        title=validated["title"],
        content=validated["content"],
        user=user,
        comments=[],
        # image=image_filename
    ).save()

    return jsonify(qpost.to_public_json())


@app.route("/api/qposts/id/<string:id>")
def qposts_item(id: str):
    try:
        qpost = Qpost.objects(pk=id).first()

        # If post has alreay been deleted
        if not qpost:
            raise ValidationError
    except ValidationError:
        return jsonify({"error": "Post not found"}), 404

    return jsonify(qpost.to_public_json())


@app.route("/api/qposts/user/<string:username>")
def qposts_user(username: str):
    try:
        user = User.objects(username=username).first()
    except ValidationError:
        return jsonify({"error": "User not found"}), 404

    qposts = Qpost.objects(user=user).order_by("-created")

    return jsonify([qpost.to_public_json() for qpost in qposts])


@app.route("/api/qposts/id/<string:id>", methods=["DELETE"])
@login_required
def qposts_delete(username: str, id: str):
    try:
        qpost = Qpost.objects(pk=id).first()

        # If post has alreay been deleted
        if not qpost:
            raise ValidationError
    except ValidationError:
        return jsonify({"error": "Post not found"}), 404

    # Check whether action was called by creator of the post
    if username != qpost.user.username:
        return jsonify({"error": "You are not the creator of the post"}), 401

    qpost_info = qpost.to_public_json()

    qpost.delete()

    return jsonify(qpost_info)


@app.route("/api/qposts/<string:id>/comments", methods=["POST"])
@login_required
def qposts_create_comment(username: str, id: str):
    schema = Schema({
        "content": And(str, len, error="No content specified")
    })
    validated = schema.validate(request.json)

    try:
        qpost = Qpost.objects(pk=id).first()
    except ValidationError:
        return jsonify({"error": "Post not found"}), 404

    user = User.objects(username=username).first()
    comments = qpost.comments
    comments.append(Comment(user=user, content=validated["content"]))
    qpost.save()

    return jsonify([comment.to_public_json() for comment in qpost.comments][::-1])


@app.route("/api/qposts/<string:id>/upvote", methods=["POST"])
@login_required
def qposts_upvote(username: str, id: str):
    try:
        qpost = Qpost.objects(pk=id).first()
    except ValidationError:
        return jsonify({"error": "Post not found"}), 404

    user = User.objects(username=username).first()

    upvotes = qpost.upvotes
    downvotes = qpost.downvotes

    if username in [u["username"] for u in upvotes]:
        # User already upvotes
        upvote_index = [d.username for d in upvotes].index(username)
        upvotes.pop(upvote_index)
    elif username in [u["username"] for u in downvotes]:
        # User already downvoted
        downvote_index = [d.username for d in downvotes].index(username)
        downvotes.pop(downvote_index)
        upvotes.append(user)
    else:
        upvotes.append(user)

    qpost.save()

    return jsonify({
        "upvotes": qpost.to_public_json()["upvotes"],
        "downvotes": qpost.to_public_json()["downvotes"]
    })


@app.route("/api/qposts/<string:id>/downvote", methods=["POST"])
@login_required
def qposts_downvote(username: str, id: str):
    try:
        qpost = Qpost.objects(pk=id).first()
    except ValidationError:
        return jsonify({"error": "Post not found"}), 404

    user = User.objects(username=username).first()

    upvotes = qpost.upvotes
    downvotes = qpost.downvotes

    if username in [u["username"] for u in downvotes]:
        # User already upvotes
        downvote_index = [d.username for d in downvotes].index(username)
        downvotes.pop(downvote_index)
    elif username in [u["username"] for u in upvotes]:
        upvote_index = [d.username for d in upvotes].index(username)
        upvotes.pop(upvote_index)
        downvotes.append(user)
    else:
        downvotes.append(user)

    qpost.save()

    return jsonify({
        "upvotes": qpost.to_public_json()["upvotes"],
        "downvotes": qpost.to_public_json()["downvotes"]
    })
