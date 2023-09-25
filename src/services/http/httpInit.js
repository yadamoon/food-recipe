import apiService from './http-common'
import { tokenService } from '../storageService'

export default function httpInit() {
  apiService.init()
  if (tokenService.getToken()) {
    apiService.setHeader()
    apiService.mount401Interceptor()
  }
}
