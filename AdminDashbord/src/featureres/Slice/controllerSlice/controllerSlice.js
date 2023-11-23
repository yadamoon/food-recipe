import { createSlice } from '@reduxjs/toolkit'

export const controllerSlice = createSlice({
  name: 'controller',
  initialState: [],
  reducers: {
    logout: (state, actions) => {
      console.log('logout')
    },
  },
})
// this is for dispatch
export const { logout } = controllerSlice.actions

// this is for configureStore

export default controllerSlice.reducer
