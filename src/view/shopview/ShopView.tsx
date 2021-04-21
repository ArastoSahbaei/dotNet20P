import { useEffect, useState } from 'react'

export const ShopView = () => {
	const [count, setCount] = useState(0)

	/* 	useEffect(() => {
			alert('yo .net20p!')
			return () => { alert('goodbye .net20p!') }
		}, [count])
	 */
	return (
		<div>
			<h1 onClick={() => setCount(count + 1)}>{count}</h1>
		</div>
	)
}
