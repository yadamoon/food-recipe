import apiService from './http-common'
import { tokenService } from '../storageService'

const auth = {
  async signIn(payload) {
    try {
      const response = await apiService.request(payload)
      const { token, ...user } = response.data
      tokenService.saveToken(token)
      apiService.setHeader()

      return { isError: false, user }
    } catch (err) {
      return { isError: true, error: err }
    }
  },
  signOut() {
    apiService.removeHeader()
    tokenService.removeToken()
  },
}
export default auth
