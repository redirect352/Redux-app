import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items : []
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
	menuLoaded : (state, action) => {
		//console.log(state);
		state.items = action.payload;
		//console.log(state);
	},
  },
})

// Action creators are generated for each case reducer function
export const { menuLoaded } = menuSlice.actions
export default menuSlice.reducer