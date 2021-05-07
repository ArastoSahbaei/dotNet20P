import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../shared/images/logotype.svg'
import RoutingPath from '../../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import { Cart } from '../../cart/Cart'
import { useState } from 'react'

export const DesktopNavigation = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const [isCartOpen, setIsCartOpen] = useState<boolean>(true)
	const history = useHistory()

	const renderLogin = () => {
		return authenticatedUser
			? <div className='signInButton'> <Profile /> </div>
			: <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
	}

	return (
		<div className='desktopNavigationWrapper'>
			<img className='navigationLogotype'
				src={Logotype}
				alt={'..error'}
				onClick={() => history.push(RoutingPath.homeView)} />
			<span className='shopButton' onClick={() => history.push(RoutingPath.shopView)}>shop</span>
			<span className='accessoriesButton' onClick={() => history.push(RoutingPath.accessoriesView)}>accesories</span>
			<span className='brandsButton' onClick={() => history.push(RoutingPath.brandsView)}>brands</span>
			<span className='newsButton' onClick={() => history.push(RoutingPath.newsView)}>news</span>
			<Cart isCartOpen={isCartOpen} cartHandler={setIsCartOpen} />
			{renderLogin()}
			<button onClick={() => setIsCartOpen(true)}>open cart</button>
		</div>
	)
}

