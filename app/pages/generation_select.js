import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'

import { input_generation } from '../actions/input'
import { GenSelect } from '../components/gen_select'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

class GenerationSelect extends React.Component {
  static navigationOptions = {
    title: 'Generation Select'
  }

  inputGeneration(generation) {
    this.props.onGenSubmitted(generation)
    this.props.screenProps.navigator(this.props.navigation, 'PokemonSelect')
  }

  render() {
    return (
      <View style={styles.container}>
        <GenSelect onGenSelect={(gen) => this.inputGeneration(gen)}/>
      </View>
    )
  }
}

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

export default connect(select, actions)(GenerationSelect)
