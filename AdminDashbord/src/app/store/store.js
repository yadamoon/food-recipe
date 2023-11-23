import { configureStore } from '@reduxjs/toolkit'
import controllerSlice from '../../featureres/Slice/controllerSlice/controllerSlice'

export default configureStore({
  reducer: {
    controller: controllerSlice,
  },
})
