import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import configureStore from './app/store/configure_store'

import TestPage from './app/pages/test_page'

const Navigator = StackNavigator({
  Home: { screen: TestPage }
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
