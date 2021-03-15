import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import TextInputFields from './components/TextInputFields';
import mainStyleSheet from './components/mainStyleSheet';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import PasswordInputText from 'react-native-hide-show-password-input';
import TouchableOpacitys from './components/TouchableOpacity';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      showPassword: true,
    };
  }

  onPressShowPassword = (showPassword) => {
    this.setState((preState) => {
      return {
        showPassword: !preState.showPassword,
      };
    });
    // this.setState({showPassword: true, password: '123'});
    // console.log('shpw [ass', this.state.showPassword);
  };
  render() {
    const {password, showPassword} = this.state;
    return (
      <ScrollView>
        <View style={mainStyleSheet.module1}>
          <Image
            style={mainStyleSheet.logoimage}
            source={require('./assets/images/newlogo.png')}
          />
          <Text style={mainStyleSheet.title}>Glad To See You!</Text>
          <View style={{flexDirection: 'row'}}>
            {/* <TextInputFields placeholder={'91'} /> */}
            <TextInputFields
              style={[mainStyleSheet.textinput]}
              placeholder={'Phone Number'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              flex: 1,
            }}>
            <TextInputFields
              getRef={(input) => (this.input = input)}
              value={password}
              onChangeText={(password) => this.setState({password})}
              placeholder={'Enter Password'}
              secureTextEntry={showPassword}
            />
            {/* <PasswordInputText
              getRef={(input) => (this.input = input)}
              value={password}
              onChangeText={(password) => this.setState({password})}
            /> */}
            <TouchableOpacity
              onPress={() => this.onPressShowPassword(showPassword)}>
              <Icon title="Clear" style={{padding: 10}} name="eye" size={20} />
            </TouchableOpacity>
          </View>
          <Text style={mainStyleSheet.textforgot}>Forgot Password?</Text>
        </View>
        <View style={mainStyleSheet.module2}>
          <TouchableOpacity>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#bc4c4c', '#e46d6d']}
              style={mainStyleSheet.buttonStyle}>
              <Text style={mainStyleSheet.text}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacitys /> */}
        <View style={mainStyleSheet.items}>
          <View style={mainStyleSheet.userViewstyle}>
            <Text>New User?</Text>
            <Text
              onPress={() => Actions.signup()}
              style={mainStyleSheet.textsignup}>
              SignUp
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SignIn;
