import React from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';
import { useSelector } from "react-redux";

const  MenuList = () =>{
	const menu = useSelector(state => state.menu.items);
	
	return (
		<ul className="menu__list">
			{menu.map (item => (
				<MenuListItem {...item} key={item.id}/>
			))}
		</ul>
	)
};


export default MenuList;