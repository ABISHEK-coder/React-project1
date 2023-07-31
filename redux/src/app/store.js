import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../app/reducer/counterslice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})