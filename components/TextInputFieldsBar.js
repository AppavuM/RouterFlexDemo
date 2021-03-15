import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import mainStyleSheet from './mainStyleSheet';

class TextInputFieldsBar extends Component {
  static defaultProps = {
    placeholder: '',
    keyboardType: 'numeric',
    secureTextEntry: true,
  };
  render() {
    const {placeholder, keyboardType, secureTextEntry} = this.props;
    return (
      <View>
        <TextInput
          style={mainStyleSheet.textinput}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={true}
        />
      </View>
    );
  }
}
export default TextInputFieldsBar;
