import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import { input_stats_gen_1, input_stats_gen_2, input_generation } from '../actions/input'
import { GenSelect } from '../components/gen_select'

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

  inputGeneration(generation) {
    this.props.onGenSubmitted(generation)    
  }

  render() {
    return (
      <View style={styles.container}>
        <GenSelect onGenSelect={(gen) => this.inputGeneration(gen)}/>
        <Text>{this.props.generation}</Text>
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

let text = 'Not Pressed'

const select = (store) => {
  return {
    hp: store.input_stats.hp,
    generation: store.selections.generation
  }
}

const actions = (dispatch) => {
  return {
    onGen1InputSubmitted: (hp) => { dispatch(input_stats_gen_1(0, hp)) },
    onGen2InputSubmitted: (hp) => { dispatch(input_stats_gen_2(0, hp)) },
    onGenSubmitted: (generation) => { dispatch(input_generation(generation)) }
  }
}

export default connect(select, actions)(TestPage)
