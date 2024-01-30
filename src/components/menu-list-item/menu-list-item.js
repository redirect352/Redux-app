import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({title, price, url, cathegory,}) => {
    return (
        <>
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}/>
                <div className="menu__category">Category: <span>{cathegory}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
        </>
    )
}

export default MenuListItem;