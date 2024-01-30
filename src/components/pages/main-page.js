import React, { useContext } from 'react';
import MenuList from '../menu-list';
import RestoServiceContext from "../resto-service-context/resto-service-context";

const MainPage = () => {
	const myServ = useContext(RestoServiceContext);
	console.log(myServ.getMenuItems());
    return (
        <MenuList/>
    )
}

export default MainPage;
