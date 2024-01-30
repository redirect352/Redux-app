import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menu : []
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
	menuLoaded : (state, action) => {
		state.menu = action.payload;
	},
  },
})

// Action creators are generated for each case reducer function
export const { menuLoaded } = menuSlice.actions

export default menuSlice.reducer