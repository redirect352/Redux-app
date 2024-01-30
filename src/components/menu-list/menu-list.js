import React from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../slices/cartSlice";
import { getMenuItems } from "../../slices/menuSlice";

const  MenuList = () =>{
	const menu = useSelector(getMenuItems);
	const dispatch = useDispatch();
	const onAddToCart = (id, count = 1, price) => dispatch(addItemToCart({id, count, price})) ;

	return (
		<ul className="menu__list">
			{menu.map (item => (
				<MenuListItem 
					{...item} 
					key={item.id}
					onAddToCart = {()=>onAddToCart(item.id,1, item.price)}/>
			))}
		</ul>
	)
};


export default MenuList;