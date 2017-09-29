import React from 'react'
import { Text, TextInput, FlatList, StyleSheet, TouchableHighlight, View, Button } from 'react-native'

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
    color: 'black'
  },
  list_item_text_sub: {
    padding: 10,
    fontSize: 20,
    color: 'grey'
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

class SavedPokemonListItem extends React.PureComponent {
  render() {
    return (
      <TouchableHighlight style={styles.list_item_highlight} underlayColor='#ccc' onPress={() => this.onPressTouchableHighlight()}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.list_item_text}>{this.props.name}</Text>
            <Text style={styles.list_item_text_sub}>{this.getDvString()}</Text>
          </View>
          <View style={{justifyContent: 'center', paddingHorizontal: 5}}>
            <Button title='Remove' onPress={() => this.onPressButton()}/>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  onPressTouchableHighlight() {
    this.props.onSavedPokemonSelected(this.props.dvRanges, this.props.submittedStats)
  }

  onPressButton() {
    this.props.onRemoveSavedPokemon(this.props.id)
  }

  getDvString() {
    returnString = ' ('
    dvs = this.props.dvRanges
    
    if (dvs === null ||
        dvs.attackRange === null ||
        dvs.defenseRange === null ||
        dvs.hpRange === null ||
        dvs.specialRange === null ||
        dvs.speedRange === null) {
      return ''
    }

    if (dvs.hpRange[0] === dvs.hpRange[1]) {
      returnString = returnString + dvs.hpRange[0] + ', '
    } else {
      returnString = returnString + '?, '
    }
    if (dvs.attackRange[0] === dvs.attackRange[1]) {
      returnString = returnString + dvs.attackRange[0] + ', '
    } else {
      returnString = returnString + '?, '
    }
    if (dvs.defenseRange[0] === dvs.defenseRange[1]) {
      returnString = returnString + dvs.defenseRange[0] + ', '
    } else {
      returnString = returnString + '?, '
    }
    if (dvs.speedRange[0] === dvs.speedRange[1]) {
      returnString = returnString + dvs.speedRange[0] + ', '
    } else {
      returnString = returnString + '?, '
    }
    if (dvs.specialRange[0] === dvs.specialRange[1]) {
      returnString = returnString + dvs.specialRange[0] + ')'
    } else {
      returnString = returnString + '?)'
    }

    return returnString
  }
}


export default class SavedPokemonList extends React.Component {
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
      filterRegex.test(item.name)
    );
    const filteredData = this.props.saved_pokemon.filter(filter);
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.onChangeFilterText}
          placeholder='Filter by name'
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
      <SavedPokemonListItem
        id={item.id}
        name={item.name}
        dvRanges={item.dvRanges}
        submittedStats={item.submittedStats}
        onSavedPokemonSelected={this.props.onSavedPokemonSelected}
        onRemoveSavedPokemon={this.props.onRemoveSavedPokemon} />
    )
  }

  keyExtractor(item) {
    return item.id
  }
}
