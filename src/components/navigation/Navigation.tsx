import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'

export const Navigation = () => {
	const { width, height } = useWindowDimensions()

	const displayNavigation = () => {
		return width <= 1140 ? <MobileNavigation /> : <DesktopNavigation />
	}

	return (
		<div>
			{displayNavigation()}
		</div>
	)
}
