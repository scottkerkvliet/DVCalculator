import React from 'react'
import { Text, FlatList } from 'react-native'


class PokemonListItem extends React.PureComponent {
  render() {
    return (
      <Text>{this.props.text}</Text>
    )
  }
}


export default class PokemonList extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.pokemon}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem} />
    )
  }

  renderItem({ item }) {
    return (
      <PokemonListItem text={item.name} />
    )
  }

  keyExtractor(item) {
    return item.name
  }
}
