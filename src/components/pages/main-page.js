import React, { useCallback, useContext } from 'react';
import MenuList from '../menu-list';
import RestoServiceContext from "../resto-service-context/resto-service-context";
import useLoader from "../../hooks/useLoader";
import { useDispatch } from "react-redux";
import { menuLoaded } from "../../slices/menuSlice";

const MainPage = () => {
	const restoService = useContext(RestoServiceContext);
	const dispatch = useDispatch();
	const onMenuLoaded  = (menu) =>  dispatch(menuLoaded(menu));
	const loaderFunction = useCallback(()=>restoService.getMenuItems(), [restoService]);
	const loader = useLoader(loaderFunction, onMenuLoaded);
    return (
        <MenuList/>
    )
}

export default MainPage;
