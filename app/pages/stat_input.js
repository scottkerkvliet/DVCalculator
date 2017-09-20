import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'

import { input_stats_gen_1, input_stats_gen_2, reset_stats } from '../actions/input'
import { update_dv_ranges, confirm_valid_input } from '../actions/calculation'
import { StatInputFields } from '../components/stat_input_fields'
import { DvDisplay } from '../components/dv_display'
import { DvCalculator } from '../components/dv_calculator'

const styles = StyleSheet.create({
  container: {  
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  text: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'stretch',
    textAlign: 'center'
  }
})

class StatInput extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`
  })

  constructor(props) {
    super(props)
    this.state = { text: null }
  }

  componentWillUnmount() {
    this.props.onStatsReset()
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
    if (this.props.input_stats.previous_levels_submitted.includes(level)) {
      Alert.alert('Did not update DVs', 'Level has already been submitted')
    } else {
      this.props.onGen2StatsSubmitted(level, hp, attack, defense, special_attack, special_defense, speed)
    }
  }

  submitDvRange(hpRange, attackRange, defenseRange, speedRange, specialRange) {
    try {
      this.props.onDvRangeUpdate(hpRange, attackRange, defenseRange, speedRange, specialRange)
    } catch(error) {
      Alert.alert('Did not update DVs', error)
      return
    }

    this.refs['inputs'].updateLevel(String(parseInt(this.props.input_stats.level) + 1))
    this.props.onValidUpdate(this.props.input_stats.level)
  }

  resetStats() {
    this.refs['inputs'].clearInput()
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
        <StatInputFields
          generation={this.props.generation}
          onSubmitGen1={(level, hp, attack, defense, speed, special) =>
            this.submitStatsGen1(level, hp, attack, defense, speed, special)}
          onSubmitGen2={(level, hp, attack, defense, special_attack, special_defense, speed) =>
            this.submitStatsGen2(level, hp, attack, defense, special_attack, special_defense, speed)}
          ref='inputs'/>
        <Text style={styles.text}>DVs</Text>
        <View style={styles.container}>
          <DvDisplay statRange={this.props.dv_ranges.hpRange} title='HP'/>
          <DvDisplay statRange={this.props.dv_ranges.attackRange} title='Attack'/>
          <DvDisplay statRange={this.props.dv_ranges.defenseRange} title='Defense'/>
          <DvDisplay statRange={this.props.dv_ranges.speedRange} title='Speed'/>
          <DvDisplay statRange={this.props.dv_ranges.specialRange} title='Special'/>
        </View>
        <View>
          <Button title='Reset' onPress={() => this.resetStats()}/>
        </View>
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
