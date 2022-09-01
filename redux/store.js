import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import restaurantReducer from '../features/counter/restaurantSlice'

export const store = configureStore({
  reducer: { 
      counter: counterReducer,
      restaurant:restaurantReducer
  },
})