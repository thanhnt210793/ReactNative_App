
import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './src/pages/Login';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#fce4ec',
    flex: 1,
    alignItems  : 'center',
    justifyContent : 'center'
  }
});
