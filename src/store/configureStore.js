import { configureStore } from '@reduxjs/toolkit'
import messageReducer from '../store/Messages'


export const store = configureStore({
  reducer: {
    messages: messageReducer,
  },
})