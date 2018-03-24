
import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './src/pages/Login';
import { Tabs } from './src/config/Tabs/index';

export default class App extends Component {
  render() {
    return (
        <Tabs />
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
