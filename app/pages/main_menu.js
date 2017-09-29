import React from 'react';
import { connect } from 'react-redux'
import { Alert, AsyncStorage, StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'

import { load_pokemon } from '../actions/input'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  button: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  text: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    zIndex: 1
  }
})

class MainMenu extends React.Component {
  static navigationOptions = {
    title: 'Main Menu'
  }

  // This is a purge if we update the saved pokemon data structure
  /*
  componentDidMount() {
    AsyncStorage.clear()
    .then(() =>
      Alert.alert('Cleared'))
  }
  */

  navigateToInput() {
    this.props.screenProps.navigator(this.props.navigation, 'GenerationSelect')
  }
  
  navigateToSaved() {
    this.props.screenProps.navigator(this.props.navigation, 'SavedPokemonSelect')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.navigateToInput()}>
          <Text style={styles.text}>Check new Pokemon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.navigateToSaved()}>
          <Text style={styles.text}>View saved Pokemon</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const select = (store) => {
  return {}
}

const actions = (dispatch) => {
  return {}
}

export default connect(select, actions)(MainMenu)
