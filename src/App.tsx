import './shared/global/Global.css'
import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { UserProvider } from './shared/provider/UserProvider'
import { ItemsInCartProvider } from './shared/provider/ItemsInCartProvider'

export const App = () => {
	return (
		<ItemsInCartProvider>
			<UserProvider>
				<Routes>
					<Navigation />
				</Routes>
			</UserProvider>
		</ItemsInCartProvider>
	)
}
