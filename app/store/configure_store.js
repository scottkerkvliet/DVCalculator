import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { input_stats } from '../reducers/input_stats'
import { dv_ranges } from '../reducers/dv_ranges'
import { pokemon } from '../reducers/pokemon'
import { selections } from '../reducers/selections'
import { saved_pokemon } from '../reducers/saved_pokemon'

export default () => {
  return createStore(combineReducers({ input_stats, dv_ranges, pokemon, selections, saved_pokemon }), applyMiddleware(thunkMiddleware))
}
