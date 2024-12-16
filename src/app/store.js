import { configureStore } from '@reduxjs/toolkit'
import  atcSlice  from '../assets/AtcSlice'



export const store = configureStore({
  reducer: {
    pro : atcSlice
  },
})