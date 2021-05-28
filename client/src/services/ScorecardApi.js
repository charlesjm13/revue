import axios from 'axios'

export default () => {
  return axios.create({
    // GUIDE: use .env files to set this 
    // -> https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code
    // -> https://stackoverflow.com/questions/51406770/how-to-set-api-path-in-vue-config-js-for-production
    baseURL: 'https://api.data.gov/ed/collegescorecard/v1/schools.json'
  })
}

//https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=Knox%20College&_fields=school.name&api_key=erEtjmwQNDow4nEFMmMg4Y8EBslsmjqk4yP2E6bI