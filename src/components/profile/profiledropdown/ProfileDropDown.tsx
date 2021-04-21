import './ProfileDropDown.css'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import LocalStorage from '../../../shared/cache/LocalStorage'

export const ProfileDropDown = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const history = useHistory()

	const logout = () => {
		setAuthenticatedUser(false)
		localStorage.removeItem(LocalStorage.username)
		history.push(RoutingPath.homeView)
	}

	return (
		<div className='profileDropDownWrapper'>
			<span>Firstname Lastname</span> <br />
			<span>Email@Email.Email</span> <br />
			<hr />
			<span onClick={() => history.push(RoutingPath.profileView)}>profile</span> <br />
			<span onClick={() => history.push(RoutingPath.settingsView)}>settings</span> <br />
			<span>cart</span> <br />
			<span onClick={() => logout()}>logout</span> <br />
		</div>
	)
}
