import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Logo extends Component<{}> {

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Username"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Re-enter your password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              />
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
           </TouchableOpacity>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container :{
    flexGrow: 1,
    alignItems  : 'center',
    justifyContent : 'center'
  },

  inputBox:{
    width: 300,
    height: 50,
    backgroundColor: '#c9b2ba',
    borderRadius: 22,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },

  button:{
    width: 300,
    backgroundColor: '#c48b9f',
    borderRadius: 22,
    marginVertical: 10,
    paddingVertical:10
  },

  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }

});
