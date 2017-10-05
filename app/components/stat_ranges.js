import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native'

import { StatsRow } from './stats_row'

const statLabels = {
  attack: 'Atk',
  defense: 'Def',
  speed: 'Spe',
  hp: 'HP',
  special: 'Spc',
  special_attack: 'SpA',
  special_defense: 'SpD'
}

export class StatRanges extends React.Component {
  constructor(props) {
    super(props)
    this.state = { statRanges: {} }
  }

  componentWillMount() {
    this.calculateRanges()
  }

  getStat(dv, baseStat) {
    return Math.floor((dv + baseStat) * this.props.level / 50) + 5
  }

  getHP(dv, baseStat) {
    return Math.floor((dv + baseStat) * this.props.level / 50) + parseInt(this.props.level) + 10
  }

  calculateRanges() {
    let ranges = {}
    for (const i = 0; i < 16; i++) {
      let set = {}
      set.hp = this.getHP(i, this.props.base_stats.hp)
      set.attack = this.getStat(i, this.props.base_stats.attack)
      set.defense = this.getStat(i, this.props.base_stats.defense)
      set.speed = this.getStat(i, this.props.base_stats.speed)
      if (this.props.generation === 1) {
        set.special = this.getStat(i, this.props.base_stats.special)
      } else if (this.props.generation === 2) {
        set.special_attack = this.getStat(i, this.props.base_stats.special_attack)
        set.special_defense = this.getStat(i, this.props.base_stats.special_defense)
      }
      ranges[i] = set
    }

    this.setState({statRanges: ranges})
  }

  render() {
    return (
      <View>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
          <StatsRow
            key='headers'
            dimension_value='DV'
            stats={statLabels}
            generation={this.props.generation}/>
        </View>
        { Object.keys(this.state.statRanges).map((dv) => {
          return (<StatsRow
                    key={dv}
                    dimension_value={dv}
                    stats={this.state.statRanges[dv]}
                    generation={this.props.generation}/>)
        })}
      </View>
    )
  }
}