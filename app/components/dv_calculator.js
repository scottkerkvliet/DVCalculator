import React from 'react'
import { Alert, View } from 'react-native'


export class DvCalculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hpRange: null, attackRange: null, defenseRange: null, speedRange: null, specialRange: null }
  }

  shouldComponentUpdate(nextProps, nextState) {
    for (var key in this.props.input_stats) {
      if (this.props.input_stats[key] != nextProps.input_stats[key]) {
        return true
      }
    }
    return false
  }

  getRange(name, stat, baseStat) {
    var multiplier = this.props.input_stats.level / 50
    var min = 15
    var max = 0

    for (var i = 0; i < 16; i++) {
      if ((Math.floor((i + baseStat) * multiplier) + 5) === parseInt(stat)) {
        min = Math.min(min, i)
        max = Math.max(max, i)
      }
    }

    if (min > max) throw name + ' stat out of range for this level.'

    return [min, max]
  }

  getHPRange(stat, baseStat) {
    var multiplier = this.props.input_stats.level / 50
    var min = 15
    var max = 0

    for (var i = 0; i < 16; i++) {
      var statVariable = Math.floor((i + baseStat) * multiplier) + parseInt(this.props.input_stats.level) + 10
      if (statVariable === parseInt(stat)) {
        min = Math.min(min, i)
        max = Math.max(max, i)
      }
    }

    if (min > max) throw 'HP stat out of range for this level.'

    return [min, max]
  }

  componentDidUpdate(prevProps, prevState) {
    this.do_calculation()
  }

  do_calculation() {
    if (!this.props.input_stats.level ||
        !this.props.input_stats.hp ||
        !this.props.input_stats.attack ||
        !this.props.input_stats.defense ||
        !this.props.input_stats.speed)
      return
    if (this.props.generation === 1 && !this.props.input_stats.special)
      return
    if (this.props.generation === 2 && (!this.props.input_stats.special_attack || !this.props.input_stats.special_defense))
      return

    try {
      this.state.hpRange = this.getHPRange(this.props.input_stats.hp, this.props.base_stats.hp)
      this.state.attackRange = this.getRange('Attack', this.props.input_stats.attack, this.props.base_stats.attack)
      this.state.defenseRange = this.getRange('Defense', this.props.input_stats.defense, this.props.base_stats.defense)
      this.state.speedRange = this.getRange('Speed', this.props.input_stats.speed, this.props.base_stats.speed)
      if (this.props.generation === 1) {
        this.state.specialRange = this.getRange('Special', this.props.input_stats.special, this.props.base_stats.special)
      } else if (this.props.generation === 2) {
        var spcAtkRange = this.getRange('Special Attack', this.props.input_stats.special_attack, this.props.base_stats.special_attack)
        var spcDefRange = this.getRange('Special Defense', this.props.input_stats.special_defense, this.props.base_stats.special_defense)
        this.state.specialRange = [Math.max(spcAtkRange[0], spcDefRange[0]), Math.min(spcAtkRange[1], spcDefRange[1])]
      }
    } catch (error) {
      Alert.alert('Error with input', error)
      return
    }

    this.props.onDvUpdate(this.state.hpRange, this.state.attackRange, this.state.defenseRange, this.state.speedRange, this.state.specialRange)
    this.state = { hpRange: null, attackRange: null, defenseRange: null, speedRange: null, specialRange: null }
  }

  render() {
    return <View></View>
  }
}
