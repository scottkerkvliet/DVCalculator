import { configureStore, combineReducers } from 'redux'
import input_stats from '../reducers/input_stats'
import dv_ranges from '../reducers/dv_ranges'
import pokemon from '../reducers/pokemon'
import selections from '../reducers/selections'
import generation1 from '../common/generation1'
import generation2 from '../common/generation2'

let initial_state = {
  pokemon: {
    1: generation1,
    2: generation2
  },
  selections: {
    pokemon_id: null,
    generation: null
  },
  dv_ranges: {
    attack: null,
    defense: null,
    special: null,
    speed: null,
    hp: null
  },
  input_stats: {
    previous_levels_submitted: [],
    attack: null,
    defense: null,
    special: null,
    special_attack: null,
    special_defense: null,
    speed: null,
    hp: null
  }
}

export default () => {
  createStore(combineReducers({ input_stats, dv_ranges, pokemon, selections }), initial_state)
}
