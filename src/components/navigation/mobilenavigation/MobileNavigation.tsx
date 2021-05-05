import './MobileNavigation.css'
import { SideBar } from './sidebar/SideBar'
import { useState } from 'react'

export const MobileNavigation = () => {
	const [openDrawer, setOpenDrawer] = useState(true)

	return (
		<div>
			<SideBar
				drawerIsOpen={openDrawer}
				drawerHandler={setOpenDrawer} />
		</div>
	)
}
