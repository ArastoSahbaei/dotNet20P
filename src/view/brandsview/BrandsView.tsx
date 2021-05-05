import { useState, useEffect } from 'react'
import PokemonAPIservice from '../../shared/api/service/PokemonAPIservice'
import loadingImage from '../../shared/images/pokeloading.gif'

export const BrandsView = () => {
	const [serverData, setServerData] = useState<any>()
	const [search, setSearch] = useState<any>()
	const [loading, setLoading] = useState<boolean>(true)

	const fetchData = async () => {
		try {
			setLoading(true)
			const { data } = await PokemonAPIservice.searchPokemon(search)
			setServerData(data)
			setLoading(false)
		} catch (error) {
			console.log('something went wrong!')
		}
	}

	const displayData = () => {
		if (!loading) {
			return (
				<div>
					<img src={serverData?.sprites?.front_default} alt={'Error..'} />
					<h1>Name: {serverData?.name}</h1>
					<h1>Height: {serverData?.height}</h1>
					<h1>Weight: {serverData?.weight}</h1>
				</div>
			)
		} else {
			return <img src={loadingImage} alt={'Error..'} />
		}
	}

	useEffect(() => {
		fetchData()
	}, [search])

	return (
		<div>
			<input placeholder="search for character" onChange={event => setSearch(event.target.value)} /> <br />
			{displayData()}
		</div>
	)
}
