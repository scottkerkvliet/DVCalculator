import React from 'react';
import { connect } from 'react-redux'
import { Modal, StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'

import { delete_pokemon } from '../actions/input'
import { load_pokemon } from '../actions/storage'

import { DvContainer } from '../components/dv_container'
import { SubmittedStatsDisplay } from '../components/submitted_stats_display'
import SavedPokemonList from '../components/saved_pokemon_list'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    marginHorizontal: 20,
    marginTop: 100,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
  }
})

class SavedPokemonSelect extends React.Component {
  static navigationOptions = {
    title: 'Saved Pokemon'
  }

  constructor(props) {
    super(props)
    this.state = { modal: false, dvRanges: null, submittedStats: null }
  }

  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    if (this.props.saved_pokemon === null || Object.keys(this.props.saved_pokemon).length == 0) {
      return (
        <View style={styles.container}>
          <Text>No saved pokemon</Text>
        </View>
      )
    }
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.modal}
          onRequestClose={ () => null }>
          <View style={styles.modal}>
            <DvContainer dv_ranges={this.state.dvRanges}/>
            <SubmittedStatsDisplay
              submitted_stats={this.state.submittedStats}
              generation={this.props.generation}/>
            <View style={{marginTop:20}}>
              <Button title='close' onPress={ () => this.setState({ modal: false }) }/>
            </View>
          </View>
        </Modal>
        <SavedPokemonList
          saved_pokemon={this.pokemonInList()}
          onSavedPokemonSelected={(dvRanges, submittedStats) => this.onSavedPokemonSelected(dvRanges, submittedStats)}
          onRemoveSavedPokemon={(id) => this.onRemoveSavedPokemon(id)} />
      </View>
    )
  }

  pokemonInList() {
    return Object.keys(this.props.saved_pokemon).map((key) => {
      return this.props.saved_pokemon[key]
    })
  }

  onSavedPokemonSelected(dvRanges, submittedStats) {
    if (!this.state.modal) {
      this.setState({modal: true, dvRanges: dvRanges, submittedStats: submittedStats})
    }
  }

  onRemoveSavedPokemon(id) {
    this.props.onDelete(id)
  }
}

const select = (store) => {
  return {
    saved_pokemon: store.saved_pokemon
  }
}

const actions = (dispatch) => {
  return {
    onLoad: () => { dispatch(load_pokemon()) },
    onDelete: (id) => { dispatch(delete_pokemon(id)) }
  }
}

export default connect(select, actions)(SavedPokemonSelect)
