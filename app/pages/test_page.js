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

  inputGeneration(generation) {
    this.props.onGenSubmitted(generation)
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <GenSelect onGenSelect={(gen) => this.inputGeneration(gen)}/>
        <Text>{this.props.generation}</Text>
        <Button
          title={"Go to Pokemon Select"}
          onPress={() => navigate('PokemonSelect')}/>
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
  }
})

let text = 'Not Pressed'

const select = (store) => {
  return {
    generation: store.selections.generation
  }
}

const actions = (dispatch) => {
  return {
    onGenSubmitted: (generation) => { dispatch(input_generation(generation)) }
  }
}

export default connect(select, actions)(TestPage)
