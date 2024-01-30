import { configureStore } from '@reduxjs/toolkit'
import menu from "../../slices/menuSlice"
import cart from "../../slices/cartSlice"

export const store = configureStore({
  reducer: {
		menu,
		cart, 
  },
})