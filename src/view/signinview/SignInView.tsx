import './SignInView.css'
import { useState, useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import LocalStorage from '../../shared/cache/LocalStorage'

export const SignInView = () => {
	const history = useHistory()
	const [username, setUsername] = useState<string>('Arasto')
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const login = () => {
		setAuthenticatedUser(username)
		localStorage.setItem(LocalStorage.username, username)
		history.goBack()
	}

	return (
		<div>
			<h1>{authenticatedUser}</h1>
			<input placeholder='enter username' onChange={event => setUsername(event.target.value)} /> <br />
			<button onClick={() => login()}>Sign in</button>
		</div>
	)
}
