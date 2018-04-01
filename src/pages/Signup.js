import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import FormSign from '../components/FormSign';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> {

  goBack() {
      Actions.pop();
  }

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<FormSign/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}>
          <Text style={styles.signupButton}> Login</Text>
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
