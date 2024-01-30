import React from 'react';
import './cart-table.scss';
import CartItem from "../cart-item";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, getCartItems } from "../../slices/cartSlice";
import { getMenuItem } from "../../slices/menuSlice";

const CartTable = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(getCartItems);
	const deleteItem = (id) => dispatch(deleteItemFromCart(id));
	const emptyMessage = cartItems.length ? null : (<h1 style={{color:"white", textAlign:'center', marginTop:"3vh", fontWeight:'normal'}}>Вы ничего не заказали. Пожалуйста выберите что-нибудь в меню</h1>)
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
			{emptyMessage}
            <div className="cart__list">
				{cartItems.map(({id, count}) => (
					<CartItem 	key={id}
								onDeleteClicked = {()=> deleteItem(id)}
								menuItemSelector  = {(state) => getMenuItem(state, id)}
								count = {count}/>
				))}
               
            </div>
        </>
    );
};

export default CartTable;