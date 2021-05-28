import Api from '@/services/Api'

export default {
  index() {
    return Api().get('qposts')
  },

  create(qpost) {
    return Api().post('qposts', qpost)
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

  addComment(qpostId, commentContent) {
    return Api().post('qposts/' + qpostId + '/comments', { content: commentContent })
  },

  upVote(qpostId) {
    return Api().post('qposts/' + qpostId + '/upvote')
  },

  downVote(qpostId) {
    return Api().post('qposts/' + qpostId + '/downvote')
  }
}
