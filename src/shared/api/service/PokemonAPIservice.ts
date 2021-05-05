import http from '../PokemonAPI'

const searchPokemon = (characterName: string) => {
	return http.get(`/pokemon/${characterName}`)
}

export default {
	searchPokemon
}