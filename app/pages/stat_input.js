import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'

import { input_stats_gen_1, input_stats_gen_2, reset_stats } from '../actions/input'
import { update_dv_ranges, confirm_valid_input } from '../actions/calculation'
import { StatInputFields } from '../components/stat_input_fields'
import { DvCalculator } from '../components/dv_calculator'

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
    if (this.props.input_stats.previous_levels_submitted.includes(level)) {
      Alert.alert('Did not update DVs', 'Level has already been submitted')
    } else {
      this.props.onGen1StatsSubmitted(level, hp, attack, defense, speed, special)
    }
  }

  submitStatsGen2(level, hp, attack, defense, special_attack, special_defense, speed) {
    this.props.onGen1StatsSubmitted(level, hp, attack, defense, special_attack, special_defense, speed)
  }

  submitDvRange(hpRange, attackRange, defenseRange, speedRange, specialRange) {
    try {
      this.props.onDvRangeUpdate(hpRange, attackRange, defenseRange, speedRange, specialRange)
    } catch(error) {
      Alert.alert('Did not update DVs', error)
      return
    }
    this.props.onValidUpdate(this.props.input_stats.level)
  }

  resetStats() {
    this.props.onStatsReset()
  }

  render() {
    return (
      <View>
        <DvCalculator
          input_stats={this.props.input_stats}
          base_stats={this.getPokemon()}
          generation={this.props.generation}
          onDvUpdate={(hpRange, attackRange, defenseRange, speedRange, specialRange) => 
            this.submitDvRange(hpRange, attackRange, defenseRange, speedRange, specialRange)}/>
        <Text>{this.getPokemon().name}</Text>
        <StatInputFields
          generation={this.props.generation}
          onSubmitGen1={(level, hp, attack, defense, speed, special) =>
            this.submitStatsGen1(level, hp, attack, defense, speed, special)}
          onSubmitGen2={(level, hp, attack, defense, special_attack, special_defense, speed) =>
            this.submitStatsGen2(level, hp, attack, defense, special_attack, special_defense, speed)}
          onReset={() => this.resetStats()}/>
        <Text>{this.props.dv_ranges.hpRange? (this.props.dv_ranges.hpRange[0] + ' - ' + this.props.dv_ranges.hpRange[1]) : '0 - 15'}</Text>
        <Text>{this.props.dv_ranges.attackRange? (this.props.dv_ranges.attackRange[0] + ' - ' + this.props.dv_ranges.attackRange[1]) : '0 - 15'}</Text>
        <Text>{this.props.dv_ranges.defenseRange? (this.props.dv_ranges.defenseRange[0] + ' - ' + this.props.dv_ranges.defenseRange[1]) : '0 - 15'}</Text>
        <Text>{this.props.dv_ranges.speedRange? (this.props.dv_ranges.speedRange[0] + ' - ' + this.props.dv_ranges.speedRange[1]) : '0 - 15'}</Text>
        <Text>{this.props.dv_ranges.specialRange? (this.props.dv_ranges.specialRange[0] + ' - ' + this.props.dv_ranges.specialRange[1]) : '0 - 15'}</Text>
      </View>
    )
  }
}

const select = (store) => {
  return {
    pokemon_id: store.selections.pokemon_id,
    pokemon: store.pokemon,
    generation: store.selections.generation,
    input_stats: store.input_stats,
    dv_ranges: store.dv_ranges
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
    onStatsReset: () => { dispatch(reset_stats()) },
    onDvRangeUpdate: (hpRange, attackRange, defenseRange, speedRange, specialRange) => {
      dispatch(update_dv_ranges(hpRange, attackRange, defenseRange, speedRange, specialRange))
    },
    onValidUpdate: (level) => {
      dispatch(confirm_valid_input(level))
    }
  }
}

export default connect(select, actions)(StatInput)
