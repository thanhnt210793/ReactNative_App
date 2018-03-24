import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class Profile extends Component{
    render() {
        return (
            <View style={styles.styleProfile}>
                <Text>Profile</Text>
                <TouchableOpacity 
                    onPress={() => { this.props.navigation.navigate('UserDetail')}} style={styles.buttonText}
                >
                    <Text style={styles.goToText}>Go to User Detail</Text>
                </TouchableOpacity>
            </View>
        )
    }
}