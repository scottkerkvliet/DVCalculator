import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import { input_stats_gen_1, input_stats_gen_2, reset_stats } from '../actions/input'
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

  submitStatsGen1(level, hp, attack, defense, speed, special) {
    this.props.onGen1StatsSubmitted(level, hp, attack, defense, speed, special)
  }

  submitStatsGen2(level, hp, attack, defense, special_attack, special_defense, speed) {
    this.props.onGen1StatsSubmitted(level, hp, attack, defense, special_attack, special_defense, speed)
  }

  resetStats() {
    this.props.onStatsReset()
  }

  render() {
    return (
      <View>
        <Text>{this.getPokemon().name}</Text>
        <StatInputFields
          generation={this.props.generation}
          onSubmitGen1={(level, hp, attack, defense, speed, special) =>
            this.submitStatsGen1(level, hp, attack, defense, speed, special)}
          onSubmitGen2={(level, hp, attack, defense, special_attack, special_defense, speed) =>
            this.submitStatsGen2(level, hp, attack, defense, special_attack, special_defense, speed)}
          onReset={() => this.resetStats()}/>
        <Text>{this.props.input_stats.hp}</Text>
        <Text>{this.props.input_stats.attack}</Text>
        <Text>{this.props.input_stats.defense}</Text>
        <Text>{this.props.input_stats.speed}</Text>
        <Text>{this.props.input_stats.special}</Text>
        <Text>{this.props.input_stats.special_attack}</Text>
        <Text>{this.props.input_stats.special_defense}</Text>
        <Text>{this.props.input_stats.previous_levels_submitted}</Text>
      </View>
    )
  }
}

const select = (store) => {
  return {
    pokemon_id: store.selections.pokemon_id,
    pokemon: store.pokemon,
    generation: store.selections.generation,
    input_stats: store.input_stats
  }
}

const actions = (dispatch) => {
  return {
    onGen1StatsSubmitted: (level, hp, attack, defense, speed, special) => {
      dispatch(input_stats_gen_1(level, hp, speed, attack, defense, special))
    },
    onGen2StatsSubmitted: (level, hp, attack, defense, special_attack, special_defense, speed) =>{
      dispatch(input_stats_gen_2(level, hp, speed, attack, defense, special_attack, special_defense))
    },
    onStatsReset: () => { dispatch(reset_stats()) }
  }
}

export default connect(select, actions)(StatInput)
