import { AsyncStorage, Alert } from 'react-native'

export const load_pokemon = () => {
  return dispatch =>
    AsyncStorage.getItem("saved_pokemon")
    .then((savedPokemon) => {
      dispatch(update_saved_pokemon(JSON.parse(savedPokemon)))
    })
}

export const update_saved_pokemon = (savedPokemon) => {
  return {
    type: 'UPDATE_SAVED_POKEMON',
    saved_pokemon: savedPokemon
  }
}