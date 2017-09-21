import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import debounce from 'lodash/debounce'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    alignSelf: 'stretch'
  },
  found: {
    color: 'darkred'
  }
})

export class DvDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {dvFound: false, text: this.getDvString()}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({text: this.getDvString(nextProps.statRange)})
    this.setState({dvFound: nextProps.statRange && nextProps.statRange[0] === nextProps.statRange[1]})
  }

  getDvString(statRange) {
    if (!statRange) {
      return '0 - 15'
    }
    if (statRange[0] === statRange[1]) {
      return statRange[0]
    }
    return statRange[0] + ' - ' + statRange[1]
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <Text style={[styles.text, this.state.dvFound && styles.found]}>{this.state.text}</Text>
      </View>
    )
  }
}