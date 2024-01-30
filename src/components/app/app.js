import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';

import { ErrorBoundary } from "react-error-boundary";
import Error from "../error";
import RestoServiceContext from "../resto-service-context/resto-service-context";
import RestoService from "../../services/resto-service";
import { Route, Routes } from "react-router-dom";

const App = () => {
	const restoService = new RestoService();
    return (
			<RestoServiceContext.Provider value = {restoService}>
				<ErrorBoundary FallbackComponent={Error}>
				<div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
					<AppHeader total={50}/>
					<Routes>
						<Route path = {'*'} element = {<MainPage/>}/>
						<Route path = {'/cart'} element = {<CartPage/>}/>
					</Routes>
				</div>
				</ErrorBoundary>
			</RestoServiceContext.Provider>
    )
}

export default App;