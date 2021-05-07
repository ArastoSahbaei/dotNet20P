import React, { useState, createContext } from 'react'

export const ItemsInCartContext = createContext<any>(null)

export const ItemsInCartProvider = (props: { children?: React.ReactChild }) => {
	const [itemsInCart, setItemsInCart] = useState(['Arasto'])
	const { children } = props

	return (
		<ItemsInCartContext.Provider value={[itemsInCart, setItemsInCart]}>
			{children}
		</ItemsInCartContext.Provider>
	)

}