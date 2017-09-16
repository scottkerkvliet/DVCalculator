import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import { input_stats_gen_1, input_stats_gen_2 } from '../actions/input'

class TestPage extends React.Component {
  static navigationOptions = {
    title: "Test Page"
  }

  constructor(props) {
    super(props)
    this.state = { text: null }
  }

  inputStats() {
    if (this.props.generation === 1) {
      this.props.onGen1InputSubmitted(this.state.text)
    }
    else {
      this.props.onGen2InputSubmitted(this.state.text)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text_input}
          onChangeText={(text) => { this.setState({ text }) }}
          value={this.state.text} />
        <Button
          title="Submit"
          onPress={() => { this.inputStats() }} />
        <Text>{"Hello world!"}</Text>
        <Text>{this.props.hp}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_input: {
    textAlign: 'center',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    width: 100
  }
})

const select = (store) => {
  return {
    hp: store.input_stats.hp,
    generation: store.selections.generation
  }
}

const actions = (dispatch) => {
  return {
    onGen1InputSubmitted: (hp) => { dispatch(input_stats_gen_1(0, hp)) },
    onGen2InputSubmitted: (hp) => { dispatch(input_stats_gen_2(0, hp)) }
  }
}

//export default connect(select, actions)(TestPage)
export default TestPage
