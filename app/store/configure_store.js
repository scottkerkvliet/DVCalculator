import { configureStore, combineReducers } from 'redux'
import dv_calculator from '../reducers/dv_calculator'
import generation1 from '../common/generation1'
import generation2 from '../common/generation2'

let initial_state = {
  pokemon: {
    1: generation1,
    2: generation2
  },
  generation: null,
  dv_ranges: {
    attack: null,
    defense: null,
    special: null,
    speed: null,
    hp: null
  },
  input_stats: {
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
