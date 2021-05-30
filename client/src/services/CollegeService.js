import ScorecardApi from '@/services/ScorecardApi'
export default {
  index() {
    return ScorecardApi().get('?school.name=Knox%20College&_fields=id,school.name,school.state,school.city,school.school_url,school.sat_scores.average.overall,student.enrollment.all,school.religious_affiliation,school.accreditor&api_key=erEtjmwQNDow4nEFMmMg4Y8EBslsmjqk4yP2E6bI', {params: {id: 146427}})  }
}