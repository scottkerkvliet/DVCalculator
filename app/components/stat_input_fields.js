import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
  },
  column: {
    flexDirection: 'column',
    flex: 1
  },
  text: {
    textAlign: 'center'
  },
  input: {
  }
})


export class StatInputFields extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: null }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Text style={styles.text}>Level</Text>
          <TextInput keyboardType='numeric' selectTextOnFocus={true} returnKeyType='next' style={styles.input}/>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>HP</Text>
          <TextInput keyboardType='numeric' selectTextOnFocus={true} returnKeyType='next' style={styles.input}/>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>Attack</Text>
          <TextInput keyboardType='numeric' selectTextOnFocus={true} returnKeyType='next' style={styles.input}/>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>Defense</Text>
          <TextInput keyboardType='numeric' selectTextOnFocus={true} returnKeyType='next' style={styles.input}/>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>Speed</Text>
          <TextInput keyboardType='numeric' selectTextOnFocus={true} returnKeyType='next' style={styles.input}/>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>Special</Text>
          <TextInput keyboardType='numeric' selectTextOnFocus={true} returnKeyType='next' style={styles.input}/>
        </View>
      </View>
    )
  }
}