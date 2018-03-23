import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component <{}>{
  render() {
    return(
      <View style={styles.container}>
          <Logo/>
          <Form/>
          <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Dont have an account yet?</Text>
              <Text style={styles.signupButton}> Signup</Text>
          </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#fce4ec',
    flex: 1,
    alignItems  : 'center',
    justifyContent : 'center'
  },
  signupTextCont:{
    flexGrow: 1,
    alignItems  : 'flex-end',
    justifyContent : 'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText:{
    color:'#8e8e8e',
    fontSize:16
  },
  signupButton: {
    color: '#373737',
    fontSize:16,
    fontWeight:'500'
  }
});
