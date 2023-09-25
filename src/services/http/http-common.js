import axios from 'axios'
import { tokenService } from '../storageService'
import { BASE_URL } from '../../config/config'

const apiService = {
  init() {
    axios.defaults.baseURL = BASE_URL
  },

  setHeader() {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${tokenService.getToken()}`
  },

  removeHeader() {
    axios.defaults.headers.common = {}
  },

  request(data) {
    return axios(data)
  },

  mount401Interceptor() {
    this.interceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401) {
          console.log('401: unauthorized -- interceptor')
          /**
           * Either sign the user out or refresh token
           * 1. sign the user out by emitting a sign out event or implement sign out here
           * 2. refresh token as shown down below
           */
          // const requestData = {
          //   url: 'auth',
          //   method: 'get',
          // }
          // try {
          //   const { data } = await this.request(requestData)
          //   tokenService.saveToken(data.token)
          //   this.setHeader()
          //   const requestDataEarlier = {
          //     url: error.config.url,
          //     method: error.config.method,
          //     data: error.config.data,
          //   }
          //   let response = await this.request(requestDataEarlier)
          //   return response
          // } catch {
          //   eventBus.$emit('sign-out')
          // }
        } else throw error
      }
    )
  },
}

export default apiService
