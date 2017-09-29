import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import { DvDisplay } from '../components/dv_display'

const styles = StyleSheet.create({
  container: {  
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginBottom: 10,
  }
})

export class DvContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DvDisplay statRange={this.props.dv_ranges.hpRange} title='HP'/>
        <DvDisplay statRange={this.props.dv_ranges.attackRange} title='Attack'/>
        <DvDisplay statRange={this.props.dv_ranges.defenseRange} title='Defense'/>
        <DvDisplay statRange={this.props.dv_ranges.speedRange} title='Speed'/>
        <DvDisplay statRange={this.props.dv_ranges.specialRange} title='Special'/>
      </View>
    )
  } 
}