import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Logo extends Component<{}>{
  render(){
    return(
      <View style={styles.container}>
          <Image  style={{width: 180, height: 180}}
                source={require('../images/Like-logo-mark-design-1.jpg')}/>
          <Text style={styles.logoText}>Welcome to My app</Text>
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
  logoText: {
    fontSize:18,
    color:'black'
  }
});
