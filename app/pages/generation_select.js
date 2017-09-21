import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import { input_stats_gen_1, input_stats_gen_2, input_generation } from '../actions/input'
import { GenSelect } from '../components/gen_select'

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

class GenerationSelect extends React.Component {
  static navigationOptions = {
    title: 'Generation Select'
  }

  constructor(props) {
    super(props)
  }

  inputGeneration(generation) {
    this.props.onGenSubmitted(generation)
    //DebouncedNavigate(this.props.navigation, 'PokemonSelect')
    //this.props.navigation.navigate('PokemonSelect')
    this.props.screenProps.navigator.navigate('PokemonSelect')
  }

  render() {
    const { navigate } = this.props.navigation

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
