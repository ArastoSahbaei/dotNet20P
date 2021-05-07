import { useEffect, useState } from 'react'
import PokemonAPIservice from '../../shared/api/service/PokemonAPIservice'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const ShopView = () => {
	const [serverData, setServerData] = useState<any>([])
	const history = useHistory()

	const fetchData = async () => {
		const { data } = await PokemonAPIservice.getAllCharacter()
		setServerData(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const displayData = () => {
		return (
			serverData.results?.map((x: any, i: number) =>
				<div key={x.name}>
					<h1 onClick={() => history.push(RoutingPath.newsView, x)}>{i} {x.name}</h1>
				</div>
			)
		)
	}

	return (
		<div>
			<button onClick={() => console.log(serverData)}>check state</button>
			{displayData()}
		</div>
	)
}
