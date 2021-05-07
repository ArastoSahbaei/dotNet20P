import { useContext } from 'react'
import { ItemsInCartContext } from '../../shared/provider/ItemsInCartProvider'
import { useLocation } from 'react-router-dom'

export const NewsView = () => {
	const location = useLocation<any>()
	const [itemsInCart, setItemsInCart] = useContext(ItemsInCartContext)

	return (
		<div>
			<h1>{location.state.name}</h1>
			<button onClick={() => setItemsInCart([...itemsInCart, location.state.name])}>Add to cart</button>
		</div>
	)
}
