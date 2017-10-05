import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native'

import { StatsRow } from './stats_row'

const statLabels = {
  attack: 'Atk',
  defense: 'Def',
  speed: 'Spd',
  hp: 'HP',
  special: 'Spc',
  special_attack: 'SpA',
  special_defense: 'SpD'
}

export class SubmittedStatsDisplay extends React.Component {
  render() {
    return (
      <View style={{maxHeight: 210}}>
        { Object.keys(this.props.submitted_stats).length === 0 ?
          <Text style={{alignSelf: 'stretch', textAlign: 'center'}}>No levels submitted</Text> :
          <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
            <StatsRow
              key='headers'
              dimension_value='Level'
              stats={statLabels}
              generation={this.props.generation}/>
          </View>
        }
        <ScrollView>
          { Object.keys(this.props.submitted_stats).map((level) => {
            return (<StatsRow
                      key={level}
                      dimension_value={level}
                      stats={this.props.submitted_stats[level]}
                      generation={this.props.generation}/>)
          })}
        </ScrollView>
      </View>
    )
  }
}