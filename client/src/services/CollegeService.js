import ScorecardApi from '@/services/ScorecardApi'
//var params = new URLSearchParams("school.name","Knox College");
export default {
  index() {
    return ScorecardApi().get('?school.name=Knox%20College&_fields=id,school.name,school.state,school.school_url,school.religious_affiliation,school.accreditor&api_key=erEtjmwQNDow4nEFMmMg4Y8EBslsmjqk4yP2E6bI', {params: {id: 146427}})  }

  
}
//return ScorecardApi().get('?school.name=Knox%20College&_fields=root.id,school.name,school.state&api_key=erEtjmwQNDow4nEFMmMg4Y8EBslsmjqk4yP2E6bI')
