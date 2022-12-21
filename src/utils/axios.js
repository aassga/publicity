// Reference: https://github.com/axios/axios
import axios from 'axios'

const instance = axios.create({
  // Api base url
  baseURL: process.env.VUE_APP_DEV_DOMAIN || '/',
  timeout: 30000
})

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    return config
  },
  // Handle error
  (err) => {
    return Promise.reject(err)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      return res.data
    } else {
      return res
    }
  },
  // Handle error
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
