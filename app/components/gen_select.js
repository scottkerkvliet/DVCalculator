import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'

export class GenSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: null }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.onGenSelect(1)}>
          <Text style={styles.button}>Gen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onGenSelect(2)}>
          <Text style={styles.button}>Gen 2</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#000',
    borderWidth: 2,
    margin: 5
  }
})
