import { createStore, combineReducers } from 'redux'
import { input_stats } from '../reducers/input_stats'
import { dv_ranges } from '../reducers/dv_ranges'
import { pokemon } from '../reducers/pokemon'
import { selections } from '../reducers/selections'

export default () => {
  return createStore(combineReducers({ input_stats, dv_ranges, pokemon, selections }))
}
