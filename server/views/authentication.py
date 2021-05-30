import jwt

from flask import jsonify, request
from models import User
from schema import Schema, Regex
from werkzeug.security import generate_password_hash, check_password_hash

from app import app

MAIL_REGEX = r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"

# GUIDE: requests to api endpoints, such as /api/signup are dealt with by individual functions
# The route function wrapper here has an argument, methods=["POST"]. This tells Flask that this function
# will only respond to POST requests. POST requests are used to send data to the server.
# https://www.w3schools.com/tags/ref_httpmethods.asp
@app.route("/api/signup", methods=["POST"])
def sign_up():
    schema = Schema({
        "firstname": str,
        "lastname": str,
        "username": str,
        "password": str,
        "email": Regex(MAIL_REGEX, error="Mail address is invalid"),
        "usertype": str,
        "userschool": str
    })
    validated = schema.validate(request.json)

    if User.objects(username=validated["username"]):
        return jsonify({"error": "Username not available"}), 409
    if User.objects(email=validated["email"]):
        return jsonify({"error": "There is already an account with your email address"}), 409

    # Hash password with sha256
    hashed_password = generate_password_hash(validated["password"])

    user = User(
        firstname=validated["firstname"],
        lastname=validated["lastname"],
        username=validated["username"],
        password=hashed_password,
        email=validated["email"],
        usertype=validated["usertype"],
        userschool=validated["userschool"]
    )
    user.save()

    token = jwt.encode({
        "username": user.username,
        "email": user.email,
        "password": user.password,
        "created": str(user.created)
    }, app.config["SECRET_KEY"])

    return jsonify({
        "success": True,
        "user": {
            "username": user.username,
            "email": user.email,
            "password": user.password,
            "created": str(user.created),
            "firstname": user.firstname,
            "lastname": user.lastname,
            "usertype": user.usertype,
            "userschool": user.userschool
        },
        "token": token.decode("UTF-8")
    })


@app.route("/api/login", methods=["POST"])
def login():
    schema = Schema({
        "username": str,
        "password": str
    })
    validated = schema.validate(request.json)

    users = User.objects(username=validated["username"])

    if len(users) == 0:
        return jsonify({"error": "User not found"}), 403

    user = users.first()

    if not check_password_hash(user.password, validated["password"]):
        return jsonify({"error": "Invalid password"}), 401

    token = jwt.encode({
        "username": user.username,
        "email": user.email,
        "password": user.password,
        "created": str(user.created)
    }, app.config["SECRET_KEY"])

    return jsonify({
        "success": True,
        "user": {
            "username": user.username,
            "email": user.email,
            "password": user.password,
            "created": str(user.created),
            "firstname": user.firstname,
            "lastname": user.lastname,
            "usertype": user.usertype,
            "userschool": user.userschool,
            "usermajor": user.usermajor,
            "userbio": user.userbio,
            "userinterests": user.userinterests
        },
        "token": token.decode("UTF-8")
    })

@app.route("/api/change", methods=["POST"])
@login_required
def change(username):
    schema = Schema({
        "usermajor": str,
        "userinterests": str,
        "userbio": str,
    })
    validated = schema.validate(request.json)

    users = User.objects(username=username)

    if len(users) == 0:
        return jsonify({"error": "User not found"}), 403

    user = users.first()

    
    user.usermajor=validated["usermajor"]
    user.userinterests=validated["userinterests"]
    user.userbio=validated["userbio"]
    
    user.save()

    return jsonify({
        "success": True,
        "user": {
            "username": user.username,
            "email": user.email,
            "password": user.password,
            "created": str(user.created),
            "firstname": user.firstname,
            "lastname": user.lastname,
            "usertype": user.usertype,
            "userschool": user.userschool,
            "usermajor": user.usermajor,
            "userinterests": user.userinterests,
            "userbio": user.userbio
        }
    })

