import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import FormLog from '../components/FormLog';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {

	signup() {
		Actions.signup()
	}

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<FormLog/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Dont have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}>
          <Text style={styles.signupButton}> Signup</Text>
          </TouchableOpacity>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#fce4ec',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'#8e8e8e',
  	fontSize:16
  },
  signupButton: {
  	color:'#373737',
  	fontSize:16,
  	fontWeight:'500'
  }
});
