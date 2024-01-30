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


export const getMenuItem = (state, id) => state.menu.items.find(item => item.id === id);
export const getMenuItems = state => state.menu.items;
export const { menuLoaded } = menuSlice.actions
export default menuSlice.reducer