import React from 'react'
import { connect } from 'react-redux'

import PokemonList from '../components/pokemon_list'

class PokemonSelect extends React.Component {
  static navigationOptions = {
    title: "Pokemon Selection"
  }

  render() {
    return (
      <PokemonList
        pokemon={this.pokemonForCurrentGen()} />
    )
  }

  pokemonForCurrentGen() {
    return Object.keys(this.props.pokemon[this.props.generation]).map((key) => {
      return this.props.pokemon[this.props.generation][key]
    })
  }
}

const select = (store) => {
  return {
    pokemon: store.pokemon,
    generation: store.selections.generation
  }
}

const actions = (dispatch) => {
  return {}
}

export default connect(select, actions)(PokemonSelect)
