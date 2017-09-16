import { configureStore, combineReducers } from 'redux'
import dv_calculator from '../reducers/dv_calculator'

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
  createStore(combineReducers({ dv_calculator }), initial_state)
}
