import Api from '@/services/Api'

export default {
  getCourseRatings() {
    return Api().get('/ratings/courses')
  },
  getCollegeRatings() {
    return Api().get('/ratings/colleges')
  },
  createCourseRatings(rating) {
    return Api().post('/ratings/courses', rating)
  },
  createCollegeRatings(rating) {
    return Api().post('/ratings/colleges', rating)
  }
}
