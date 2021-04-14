import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../shared/images/logotype.svg'
import RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavigation = () => {
	const history = useHistory()

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
			<span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
		</div>
	)
}
