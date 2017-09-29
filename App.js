import React from 'react'
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import configureStore from './app/store/configure_store'

import GenerationSelect from './app/pages/generation_select'
import PokemonSelect from './app/pages/pokemon_select'
import StatInput from './app/pages/stat_input'
import MainMenu from './app/pages/main_menu'
import SavedPokemonSelect from './app/pages/saved_pokemon_select'

import { debouncedNavigation } from './app/common/debounced-navigation'

const Navigator = StackNavigator({
  MainMenu: { screen: MainMenu },
  SavedPokemonSelect: { screen: SavedPokemonSelect },
  GenerationSelect: { screen: GenerationSelect },
  PokemonSelect: { screen: PokemonSelect },
  StatInput: { screen: StatInput }
})

if (Platform.OS == "android") {
  StatusBar.setBarStyle('light-content')
  StatusBar.setBackgroundColor('red')
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Navigator screenProps={{navigator: debouncedNavigation}}/>
      </Provider>
    );
  }
}