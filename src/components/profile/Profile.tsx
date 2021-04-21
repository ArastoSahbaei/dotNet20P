import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'
import { ProfileDropDown } from './profiledropdown/ProfileDropDown'

export const Profile = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	return (
		<div className='profileWrapper'>
			<img className='profileImg' src='https://thispersondoesnotexist.com/image' alt='error..' />
			<span>{authenticatedUser}</span>
			<ProfileDropDown />
		</div>
	)
}
