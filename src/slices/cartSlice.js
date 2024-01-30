import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
	addItemToCart : (state, action) => {
		const {cartItems} = state;
		const newItem = action.payload;
		const index = cartItems.findIndex((item)=>item.id === newItem.id);
		if(index !== -1){
			state.cartItems[index].count+= newItem.count;
		}else{
			state.cartItems.push(newItem);
		}
	},
	deleteItemFromCart : (state, action) => {
		const deleteId = action.payload;
		state.cartItems = state.cartItems.filter(item => item.id !== deleteId)
	},
  },
});


export const getTotalCartSum = state => state.cart.cartItems.reduce((sum, {price, count}) => sum + price * count, 0);
export const getCartItems = state => state.cart.cartItems;
// Action creators are generated for each case reducer function
export const { addItemToCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer