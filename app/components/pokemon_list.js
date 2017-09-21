import React from 'react'
import { Text, TextInput, FlatList, StyleSheet, TouchableHighlight, View } from 'react-native'

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
  container: {
    display: 'flex',
    flex: 1
  },
  filter: {
    padding: 10,
    fontSize: 20
  }
})

class PokemonListItem extends React.PureComponent {
  render() {
    return (
      <TouchableHighlight style={styles.list_item_highlight} underlayColor='#ccc' onPress={() => this.onPressTouchableHighlight()}>
        <Text style={styles.list_item_text}>{"#" + this.props.number + ": " + this.props.name}</Text>
      </TouchableHighlight>
    )
  }

  onPressTouchableHighlight() {
    this.props.onPokemonSelected(this.props.number, this.props.name)
  }
}


export default class PokemonList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {filterText: ''}
  }

  onChangeFilterText = (filterText) => {
    this.setState({filterText});
  }

  render() {
    const filterRegex = new RegExp(String(this.state.filterText), 'i');
    const filter = (item) => (
      filterRegex.test(item.name) || filterRegex.test(item.number)
    );
    const filteredData = this.props.pokemon.filter(filter);
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.onChangeFilterText}
          placeholder='Filter by name or number'
          placeholderTextColor='grey'
          selectTextOnFocus={true}
          style={styles.filter}
          />
        <FlatList
          data={filteredData}
          keyExtractor={this.keyExtractor}
          renderItem={(item) => this.renderItem(item)} />
      </View>
    )
  }

  renderItem({ item }) {
    return (
      <PokemonListItem
        name={item.name}
        number={item.number}
        onPokemonSelected={this.props.onPokemonSelected} />
    )
  }

  keyExtractor(item) {
    return item.name
  }
}
