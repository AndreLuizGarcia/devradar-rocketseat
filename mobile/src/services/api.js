import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.55.40.53:3333'
})

export default api