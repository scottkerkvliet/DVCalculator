import React from 'react';
import { connect } from 'react-redux'
import { Text, TextInput, View, Button } from 'react-native'

import { input_stats_gen1 } from '../actions/input'

class TestPage extends React.Component {
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
    <View>
      <Text>{this.props.hp}</Text>
      <TextInput
        onChangeText={(text) => { this.setState({ text }) }}
        value={this.state.text} />
      <Button
        title="Submit",
        onPress={this.inputStats()} />
    </View>
  }
}

const select = (store) => {
  return {
    hp: store.input_stats.hp,
    generation: store.selections.generation
  }
}

const actions = (dispatch) => {
  return {
    onGen1InputSubmitted: (hp) => { dispatch(input_stats_gen1(hp)) },
    onGen2InputSubmitted: (hp) => { dispatch(input_stats_gen2(hp)) }
  }
}

export default connect(select, actions)(TestPage)
