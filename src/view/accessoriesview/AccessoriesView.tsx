import Axios from 'axios'
import { useState } from 'react'

export const AccessoriesView = () => {
	const [serverResponse, setServerResponse] = useState<any>()
	const [counter, setCounter] = useState<number>(1)

	const fetchData = async () => {
		const API_URL = `https://pokeapi.co/api/v2/pokemon/${counter}`
		try {
			const response = await Axios.get(API_URL)
			setServerResponse(response)
			setCounter(counter + 1)
		} catch (error) {
			alert('error retrieving desired data from server')
		}
	}

	return (
		<div>
			<h1>{serverResponse?.data?.name}</h1>
			<button onClick={() => fetchData()}>MAKE API CALL</button>
		</div>
	)
}
