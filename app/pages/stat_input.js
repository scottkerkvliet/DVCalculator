import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import { input_stats_gen_1, input_stats_gen_2 } from '../actions/input'
import { StatInputFields } from '../components/stat_input_fields'

class StatInput extends React.Component {
  static navigationOptions = {
    title: 'Please input stats'
  }

  constructor(props) {
    super(props)
    this.state = { text: null }
  }

  getPokemon() {
    return this.props.pokemon[this.props.generation][this.props.pokemon_id]
  }

  render() {
    return (
      <View>
        <Text>{getPokemon().name}</Text>
        <StatInputFields/>
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
    onGen1StatsSubmitted: (level, hp, attack, defense, speed, special) => {
      dispatch(input_stats_gen_1(level, hp, speed, attack, defense, special))
    },
    onGen2StatsSubmitted: (level, hp, attack, defense, speed, special_attack, special_defense) =>{
      dispatch(input_stats_gen_2(level, hp, speed, attack, defense, special_attack, special_defense))
    }
  }
}

export default connect(select, actions)(StatInput)
