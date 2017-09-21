import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import Images from '../common/images'

export class GenSelect extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.props.onGenSelect(1)}>
          <Text style={styles.text}>Red/Blue/Yellow</Text>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={Images.generation1} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.onGenSelect(2)}>
          <Text style={styles.text}>Gold/Silver/Crystal</Text>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={Images.generation2} />
          </View>
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
    flexDirection: 'column'
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
  },
  text: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    zIndex: 1
  }
})
