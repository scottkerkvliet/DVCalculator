import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  input: {
    textAlign: 'center',
    margin: 2,
    height: 38,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    alignSelf: 'stretch',
  }
})


export class InputField extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: null }
  }

  clearText() {
    this.refs['input'].setNativeProps({text: ''})
  }
  
  getFocus() {
    this.refs['input'].focus()
  }

  updateValue(value) {
    this.refs['input'].setNativeProps({text: value})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <TextInput
          disableFullscreenUI={true}
          onChangeText={(value) => this.props.onChange(value)}
          onSubmitEditing={() => this.props.onSubmit(this.props.title)}
          keyboardType='numeric'
          selectTextOnFocus={true}
          returnKeyType='next'
          style={styles.input}
          ref='input'/>
      </View>
    )
  }
}