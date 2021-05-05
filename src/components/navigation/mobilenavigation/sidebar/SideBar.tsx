import './SideBar.css'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }) => {
	return (
		<div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
			<h1 onClick={() => props.drawerHandler(false)}>EXIT</h1>
		</div>
	)
}
