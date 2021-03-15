import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import mainStyleSheet from './components/mainStyleSheet';
import TextInputFields from './components/TextInputFields';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import TextInputFieldsBar from './components/TextInputFieldsBar';
import TouchableOpacitys from './components/TouchableOpacity';

// import TouchableOpacitys from './components/TouchableOpacitys';

class SignUp extends Component {
  render() {
    return (
      <ScrollView>
        <View style={mainStyleSheet.module1}>
          <Image
            style={mainStyleSheet.logoimage}
            source={require('./assets/images/newlogo.png')}
          />
          <Text style={mainStyleSheet.title}>SignUp</Text>
          <TextInputFieldsBar placeholder={'Name'} />
          <View style={{flexDirection: 'row'}}>
            <TextInputFields
              placeholder={'91'}
              style={mainStyleSheet.mobileno}
            />
            <TextInputFields placeholder={'Phone Number'} />
          </View>
        </View>
        <View style={mainStyleSheet.module2}>
          <View>
            <TouchableOpacity onPress={() => Actions.signin()}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#bc4c4c', '#e46d6d']}
                style={mainStyleSheet.buttonStyle}>
                <Text style={mainStyleSheet.text}>Click to get SignIn</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default SignUp;

{
  /* <View>
<TextInputFields style={{flex: 1, flexDirection: 'row'}}
  placeholder={'91'}
  style={mainStyleSheet.mobileno}
/>
<TextInputFields placeholder={'Phone Number'} />
</View> */
}

{
  /* <TextInputFields style={{flex: 1}} placeholder={'91'} />
<TextInputFields
  style={[mainStyleSheet.textinput, {flex: 1}]}
  placeholder={'Phone Number'}
/> */
}

{
  /* <View style={{flex: 1, flexDirection: 'row'}}>
<TextInput
  keyboardType={'numeric'}
  style={[mainStyleSheet.textinput, mainStyleSheet.mobileno]}
  placeholder="+91"
/>
<TextInput
  style={
    (mainStyleSheet.textinput, {flex: 1, borderBottomWidth: 1})
  }
  placeholder="Phone Number"
  keyboardType={'numeric'}
/>
</View> */
}
