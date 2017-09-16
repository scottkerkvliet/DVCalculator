import { configureStore, combineReducers } from 'redux'
import input_stats from '../reducers/input_stats'

let initial_state = {
  pokemon: null,
  generation: null,
  dv_ranges: {
    attack: null,
    defense: null,
    special: null,
    speed: null,
    hp: null
  },
  input: {
    attack: null,
    defense: null,
    special: null,
    special_attack: null,
    special_defense: null,
    speed: null,
    hp: null
  },
  previous_levels_submitted: []
}

export default () => {
  createStore(combineReducers({ input_stats }), initial_state)
}
