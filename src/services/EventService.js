import axios from 'axios'

// Single Axios instance for our app
const apiClient = axios.create({
  // Base URL for all calls to use
  baseURL:
    'https://my-json-server.typicode.com/emoket/real-world-vue3-mocking-data',
  // For authentication & configuration
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events') // added onto baseURL
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
