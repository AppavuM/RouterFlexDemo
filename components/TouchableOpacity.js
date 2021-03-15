import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import mainStyleSheet from './mainStyleSheet';
import {Actions} from 'react-native-router-flux';

class TouchableOpacitys extends Component {
  static defaultProbs = {
    textValue: '',
  };
  render() {
    const {text} = this.props;
    return (
      <View>
        <TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#bc4c4c', '#e46d6d']}
            style={mainStyleSheet.buttonStyle}>
            <Text style={mainStyleSheet.text}>Login</Text>
            <Text style={mainStyleSheet.text}>{(textValue = {textValue})}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TouchableOpacitys;
