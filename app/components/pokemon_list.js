import React from 'react'
import { Text, FlatList, StyleSheet, TouchableHighlight, View } from 'react-native'

const styles = StyleSheet.create({
  list_item_highlight: {
    display: 'flex',
    borderWidth: 0.5,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  },
  list_item_text: {
    padding: 10,
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 10
  },
  container: {
    display: 'flex',
    flex: 1
  }
})

class PokemonListItem extends React.PureComponent {
  render() {
    return (
      <TouchableHighlight style={styles.list_item_highlight} underlayColor='#ccc' onPress={() => null}>
        <Text style={styles.list_item_text}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}


export default class PokemonList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select a Pokemon:</Text>
        <FlatList
          data={this.props.pokemon}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem} />
      </View>
    )
  }

  renderItem({ item }) {
    return (
      <PokemonListItem text={"#" + item.number + ": " + item.name} />
    )
  }

  keyExtractor(item) {
    return item.name
  }
}
