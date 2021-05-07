import './Cart.css'
import { useContext } from 'react'
import { ItemsInCartContext } from '../../shared/provider/ItemsInCartProvider'

export const Cart = (props: { isCartOpen: boolean, cartHandler: (handler: boolean) => void }) => {
	const [itemsInCart, setItemsInCart] = useContext(ItemsInCartContext)

	const displayCart = () => {
		return (
			itemsInCart.map((x: any, i: number) => <h1 key={i}>{x}</h1>)
		)
	}

	return (
		<div className={props.isCartOpen ? 'cart-drawer open' : 'cart-drawer'}>
			<h1 onClick={() => props.cartHandler(false)}>close cart</h1>
			{displayCart()}
			<button>Go to payment</button>
		</div>
	)
}
