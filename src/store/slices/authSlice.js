import { createSlice } from '@reduxjs/toolkit'
import { tokenService, userService } from '../../services/storageService'
const initialState = {
  signedIn: !!tokenService.getToken(),
  user: userService.getUser(),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setStatus: (state, { payload }) => {
      state.signedIn = payload.status
    },

    setUser: (state, { payload }) => {
      state.user = payload.user
      userService.saveUser(payload.user)
    },
    setShow: (state, { payload }) => {
      state.show = { ...state, [action.payload]: true }
    },
    setHide: (state, { payload }) => {
      state.show = { ...state, [action.payload]: false }
    },
  },
})

export const { setStatus, setUser, setShow, setHide } = authSlice.actions

export default authSlice.reducer
