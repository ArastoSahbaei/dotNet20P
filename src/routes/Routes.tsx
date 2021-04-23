import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/homeview/HomeView'
import { SignInView } from '../view/signinview/SignInView'
import { ShopView } from '../view/shopview/ShopView'
import { NewsView } from '../view/newsview/NewsView'
import { BrandsView } from '../view/brandsview/BrandsView'
import { AccessoriesView } from '../view/accessoriesview/AccessoriesView'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import LocalStorage from '../shared/cache/LocalStorage'
import { ProfileView } from '../view/authenticatedviews/profileview/ProfileView'
import { SettingsView } from '../view/authenticatedviews/settingsview/SettingsView'

export const Routes = (props: { children?: React.ReactChild }) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const isUserAuthenticated = () => {
		const userFromBrowserMemory = localStorage.getItem(LocalStorage.username)
		setAuthenticatedUser(userFromBrowserMemory)
	}

	const blockRouteIfAuthenticated = (view: React.FC) => { return authenticatedUser ? HomeView : view }
	const authenticationRequired = (view: React.FC) => { return !authenticatedUser ? SignInView : view }

	useEffect(() => {
		isUserAuthenticated()
	})

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)} />
				<Route exact path={RoutingPath.brandsView} component={BrandsView} />
				<Route exact path={RoutingPath.accessoriesView} component={AccessoriesView} />
				<Route exact path={RoutingPath.shopView} component={ShopView} />
				<Route exact path={RoutingPath.newsView} component={NewsView} />
				<Route exact path={RoutingPath.profileView} component={authenticationRequired(ProfileView)} />
				<Route exact path={RoutingPath.settingsView} component={authenticationRequired(SettingsView)} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}
