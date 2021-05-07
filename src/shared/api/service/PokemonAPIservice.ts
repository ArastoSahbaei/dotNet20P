import http from '../PokemonAPI'

const searchPokemon = (characterName: string) => {
	return http.get(`/pokemon/${characterName}`)
}

const getAllCharacter = () => {
	return http.get('/pokemon?limit=100')
}

export default {
	searchPokemon,
	getAllCharacter
}