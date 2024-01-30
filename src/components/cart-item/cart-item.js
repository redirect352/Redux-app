import React from 'react';
import { useSelector } from "react-redux";

const CartItem= ({menuItemSelector, count, onDeleteClicked}) => {
	const menuItem = useSelector(menuItemSelector);
	const {title, price, url} = menuItem;
    return (
        <>
			<div className="cart__item">
				<img 
				src={url}
				className="cart__item-img" alt={title}/>
				<div className="cart__item-title">{title}</div>
				
				<div className="cart__item-price">{count}шт</div>
				<div className="cart__item-price">{price*count}$</div>
				<div className="cart__close" onClick={onDeleteClicked}>&times;</div>
			</div>
        </>
    );
};

export default CartItem;