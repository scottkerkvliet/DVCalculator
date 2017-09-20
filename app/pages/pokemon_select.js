import React from 'react'
import { connect } from 'react-redux'

import PokemonList from '../components/pokemon_list'

import { input_pokemon_id } from '../actions/input'

class PokemonSelect extends React.Component {
  static navigationOptions = {
    title: "Pokemon Select"
  }

  render() {
    return (
      <PokemonList
        pokemon={this.pokemonForCurrentGen()}
        onPokemonSelected={(number, name) => this.onPokemonSelected(number, name)} />
    )
  }

  pokemonForCurrentGen() {
    return Object.keys(this.props.pokemon[this.props.generation]).map((key) => {
      return this.props.pokemon[this.props.generation][key]
    })
  }

  onPokemonSelected(number, name) {
    this.props.setSelectedPokemon(number)
    this.props.navigation.navigate('StatInput', {title: name})
  }
}

const select = (store) => {
  return {
    pokemon: store.pokemon,
    generation: store.selections.generation
  }
}

const actions = (dispatch) => {
  return {
    setSelectedPokemon: (number) => { dispatch(input_pokemon_id(number)) }
  }
}

export default connect(select, actions)(PokemonSelect)
