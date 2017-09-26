import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native'
import debounce from 'lodash/debounce'

const statLabels = {
  attack: 'Atk',
  defense: 'Def',
  speed: 'Spd',
  hp: 'HP',
  special: 'Spc',
  special_attack: 'SpA',
  special_defense: 'SpD'
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  column: {
    flex: 2,
    alignItems: 'center',
    paddingVertical: 2
  },
  firstColumn: {
    flex: 3,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'grey',
    paddingVertical: 2
  }
})

class SubmittedStatsRow extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstColumn} key='level'>
          <Text>{this.props.level}</Text>
        </View>
        <View style={styles.column} key='hp'>
          <Text>{this.props.stats.hp}</Text>
        </View>
        <View style={styles.column} key='atk'>
          <Text>{this.props.stats.attack}</Text>
        </View>
        <View style={styles.column} key='def'>
          <Text>{this.props.stats.defense}</Text>
        </View>
        {this.props.generation === 2 ?
          [<View style={styles.column} key='spcAtk'>
            <Text>{this.props.stats.special_attack}</Text>
          </View>,
          <View style={styles.column} key='spcDef'>
            <Text>{this.props.stats.special_defense}</Text>
          </View>,
          <View style={styles.column} key='spd'>
            <Text>{this.props.stats.speed}</Text>
          </View>]
        :
          [<View style={styles.column} key='spd'>
            <Text>{this.props.stats.speed}</Text>
          </View>,
          <View style={styles.column} key='spc'>
            <Text>{this.props.stats.special}</Text>
          </View>]
        }
      </View>
    )
  }
}

export class SubmittedStatsDisplay extends React.Component {
  render() {
    return (
      <View style={{maxHeight: 210}}>
        { Object.keys(this.props.submitted_stats).length === 0 ?
          <Text>No levels submitted</Text> :
          <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
            <SubmittedStatsRow
              key='headers'
              level='Level'
              stats={statLabels}
              generation={this.props.generation}/>
          </View>
        }
        <ScrollView>
          { Object.keys(this.props.submitted_stats).map((level) => {
            return (<SubmittedStatsRow
                      key={level}
                      level={level}
                      stats={this.props.submitted_stats[level]}
                      generation={this.props.generation}/>)
          })}
        </ScrollView>
      </View>
    )
  }
}