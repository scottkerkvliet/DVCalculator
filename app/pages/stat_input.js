import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import { input_stats_gen_1, input_stats_gen_2, input_generation } from '../actions/input'

class GenerationSelect extends React.Component {
  static navigationOptions = {
    title: "Please input stats"
  }

  constructor(props) {
    super(props)
    this.state = { text: null }
  }

  render() {
    return (
      <View>
        <Text>Will calculate here</Text>
      </View>
    )
  }
}

const select = (store) => {
  return {
    pokemon_id: store.selections.pokemon_id,
    pokemon: store.pokemon, 
    generation: store.selections.generation
  }
}

const actions = (dispatch) => {
  return {
  }
}

export default connect(select, actions)(StatInput)