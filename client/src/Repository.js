import axios from "axios";

const baseDomain = "https://api.data.gov/ed/collegescorecard/v1/schools?"
const baseURL = '${baseDomain}/api_key=erEtjmwQNDow4nEFMmMg4Y8EBslsmjqk4yP2E6bI'

export default axios.create({
    baseURL
});