import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/homeview/HomeView'
import { SignInView } from '../view/signinview/SignInView'
import { ShopView } from '../view/shopview/ShopView'
import { NewsView } from '../view/newsview/NewsView'
import { BrandsView } from '../view/brandsview/BrandsView'
import { AccessoriesView } from '../view/accessoriesview/AccessoriesView'
import RoutingPath from './RoutingPath'

export const Routes = (props: { children?: React.ReactChild }) => {
	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.signInView} component={SignInView} />
				<Route exact path={RoutingPath.brandsView} component={BrandsView} />
				<Route exact path={RoutingPath.accessoriesView} component={AccessoriesView} />
				<Route exact path={RoutingPath.shopView} component={ShopView} />
				<Route exact path={RoutingPath.newsView} component={NewsView} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}
