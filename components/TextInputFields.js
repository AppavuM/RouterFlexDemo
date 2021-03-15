import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import mainStyleSheet from './mainStyleSheet';

class TextInputFields extends Component {
  static defaultProps = {
    placeholder: '',
    keyboardType: 'numeric',
    secureTextEntry: false,
  };
  render() {
    const {placeholder, keyboardType, secureTextEntry} = this.props;
    console.log('thisposps', this.props);
    return (
      <View>
        <TextInput
          style={mainStyleSheet.textinput}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }
}
export default TextInputFields;
