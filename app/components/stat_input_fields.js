import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import { InputField } from './input_field'

const styles = StyleSheet.create({
  levelContainer: {
    height: 80,
    width: 100,
    alignSelf: 'center'
  },
  statsContainer: {
    height: 80,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20
  }
})

export class StatInputFields extends React.Component {
  constructor(props) {
    super(props)
    this.state = {  level: '',
                    hp: '',
                    attack: '',
                    defense: '',
                    speed: '',
                    special: '',
                    special_attack: '',
                    special_defense: '' }
  }

  submitStats() {
    if (this.props.generation === 1) {
      this.props.onSubmitGen1(this.state.level, this.state.hp, this.state.attack, this.state.defense,
        this.state.speed, this.state.special)
    } else if (this.props.generation === 2) {
      this.props.onSubmitGen2(this.state.level, this.state.hp, this.state.attack, this.state.defense,
        this.state.special_attack, this.state.special_defense, this.state.speed)
    }
  }

  submitDisabled() {
    if (this.props.generation === 1) {
      return !( this.state.level.length &&
                this.state.hp.length &&
                this.state.attack.length &&
                this.state.defense.length &&
                this.state.speed.length &&
                this.state.special.length)
    } else if (this.props.generation === 2) {
      return !( this.state.level.length &&
                this.state.hp.length &&
                this.state.attack.length &&
                this.state.defense.length &&
                this.state.speed.length &&
                this.state.special_attack.length &&
                this.state.special_defense.length)
    }
  }

  clearInput() {
    this.refs['Level'].clearText()
    this.refs['HP'].clearText()
    this.refs['Attack'].clearText()
    this.refs['Defense'].clearText()
    this.refs['Speed'].clearText()
    if (this.props.generation === 1) {
      this.refs['Special'].clearText()
    } else if (this.props.generation === 2) {
      this.refs['Spc_Atk'].clearText()
      this.refs['Spc_Def'].clearText()
    }

    this.setState({ level: '', 
                    hp: '',
                    attack: '',
                    defense: '',
                    speed: '',
                    special: '',
                    special_attack: '',
                    special_defense: '' })
  }

  updateLevel(level) {
    this.clearInput()
    this.refs['Level'].updateValue(level)
    this.setState({level: level})
    this.selectNext('Level')
  }

  selectNext(title) {
    switch(title) {
      case 'Level':
        this.refs['HP'].getFocus()
        break
      case 'HP':
        this.refs['Attack'].getFocus()
        break
      case 'Attack':
        this.refs['Defense'].getFocus()
        break
      case 'Defense':
        if (this.props.generation === 1) {
          this.refs['Speed'].getFocus()
        } else {
          this.refs['Spc Atk'].getFocus()
        }
        break
      case 'Speed':
        if (this.props.generation === 1) {
          this.refs['Special'].getFocus()
        }
        break
      case 'Special':
        break
      case 'Spc Atk':
        this.refs['Spc Def'].getFocus()
        break
      case 'Spc Def':
        this.refs['Speed'].getFocus()
        break
      default:
        break
    }
  }

  render() {
    return (
      <View>
        <View style={styles.levelContainer}>
          <InputField
            onChange={(value) => this.setState({ level: value })}
            onSubmit={(title) => this.selectNext(title)}
            title='Level'
            ref='Level' />
        </View>
        <View style={styles.statsContainer}>
          <InputField
            onChange={(value) => this.setState({ hp: value })}
            onSubmit={(title) => this.selectNext(title)}
            title='HP'
            ref='HP' />
          <InputField
            onChange={(value) => this.setState({ attack: value })}
            onSubmit={(title) => this.selectNext(title)}
            title='Attack'
            ref='Attack' />
          <InputField
            onChange={(value) => this.setState({ defense: value })}
            onSubmit={(title) => this.selectNext(title)}
            title='Defense'
            ref='Defense' />
          {this.props.generation === 2 ?
            [<InputField
              onChange={(value) => this.setState({ special_attack: value })}
              onSubmit={(ref) => this.selectNext(ref)}
              title='Spc Atk' key='Spc Atk' ref='Spc Atk' />,
            <InputField
              onChange={(value) => this.setState({ special_defense: value })}
              onSubmit={(title) => this.selectNext(title)}
              title='Spc Def' key='Spc Def' ref='Spc Def' />,
            <InputField
              onChange={(value) => this.setState({ speed: value })}
              onSubmit={(title) => this.selectNext(title)}
              title='Speed' key='Speed' ref='Speed' />]
            :
            [<InputField
              onChange={(value) => this.setState({ speed: value })}
              onSubmit={(title) => this.selectNext(title)}
              title='Speed' key='Speed' ref='Speed' />,
            <InputField
              onChange={(value) => this.setState({ special: value })}
              onSubmit={(title) => this.selectNext(title)}
              title='Special' key='Special' ref='Special' />]
          }
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Submit'
            style={styles.button}
            onPress={() => this.submitStats()}
            disabled={this.submitDisabled()}/>
          <Button title='Clear' style={styles.button} onPress={() => this.clearInput()}/>
        </View>
      </View>
    )
  }
}