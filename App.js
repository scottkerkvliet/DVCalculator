import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import configureStore from './app/store/configure_store'

import GenerationSelect from './app/pages/generation_select'
import PokemonSelect from './app/pages/pokemon_select'
import StatInput from './app/pages/stat_input'

const Navigator = StackNavigator({
  Home: { screen: GenerationSelect },
  PokemonSelect: { screen: PokemonSelect },
  StatInput: { screen: StatInput }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Navigator/>
      </Provider>
    );
  }
}
