import { AsyncStorage, Alert } from 'react-native'

let default_state = null

export const saved_pokemon = (state = default_state, action) => {
  switch(action.type) {
    case 'UPDATE_SAVED_POKEMON':
      newState = { ...action.saved_pokemon }  
      return newState
    case 'DELETE_POKEMON':
      newState = { ...state }
      delete newState[action.id]
      AsyncStorage.setItem("saved_pokemon", JSON.stringify(newState))
        .catch(() => {
          Alert.alert('An error has occurred', 'We could not delete this Pokemon. Please reload the page')
        })
      return newState
    case 'SAVE_POKEMON':
      newKey = 0
      let newState = {}
      if (state !== null) {
        keys = Object.keys(state)
        if (keys.length !== 0) {
          newKey = Math.max.apply(null, keys) + 1
          newState = { ...state }
        }
      }

      newState[newKey] = { dvRanges: action.dvs, id: newKey, name: action.name, number: action.number, submittedStats: action.submittedStats}

      AsyncStorage.setItem("saved_pokemon", JSON.stringify(newState))
        .then(() => {
          Alert.alert('Saved')
        })
      return newState
    default:
      return state
  }
}