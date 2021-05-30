import Api from '@/services/Api'

export default {
  index() {
    return Api().get('qposts')
  },

  create(post) {
    return Api().post('qposts', post)
  },

  delete(id) {
    return Api().delete('qposts/id/' + id)
  },

  item(id) {
    return Api().get('qposts/id/' + id)
  },

  user(username) {
    return Api().get('qposts/user/' + username)
  },

  addComment(postId, commentContent) {
    return Api().post('qposts/' + postId + '/comments', { content: commentContent })
  },

  upVote(postId) {
    return Api().post('qposts/' + postId + '/upvote')
  },

  downVote(postId) {
    return Api().post('qposts/' + postId + '/downvote')
  }
}
