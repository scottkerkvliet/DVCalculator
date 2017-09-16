import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight, TouchableOpacity } from 'react-native'

export class GenSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: null }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.props.onGenSelect(1)}>
          <Text style={styles.text}>Gen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.onGenSelect(2)}>
            <Text style={styles.text}>Gen 2</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  button: {
    flex: 1,
    backgroundColor: 'skyblue',
    borderColor: '#000',
    borderWidth: 2,
    margin: 5,
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
