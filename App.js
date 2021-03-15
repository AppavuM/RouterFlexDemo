import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import SignIn from './SignIn';
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="signin" component={SignIn} title="Login" />
          <Scene key="signup" component={SignUp} title="Register" initial />
        </Stack>
      </Router>
    );
  }
}
export default App;
