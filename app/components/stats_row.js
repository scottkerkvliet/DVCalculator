import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native'

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

export class StatsRow extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstColumn} key='dimension'>
          <Text>{this.props.dimension_value}</Text>
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
