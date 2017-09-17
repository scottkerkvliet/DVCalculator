import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import Images from '../common/images'

export class GenSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: null }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.props.onGenSelect(1)}>
          <Image style={styles.image} source={Images.generation1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.onGenSelect(2)}>
          <Image style={styles.image} source={Images.generation2} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 5,
    marginBottom: 5
  },
  button: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    resizeMode: 'contain',
    flex: 1
  }
})
