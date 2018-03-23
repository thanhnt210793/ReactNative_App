import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default class Profile extends Component{
    render() {
        return (
            <View >
                <Text style={styles.styleProfile}>Profile</Text>
            </View>
        )
    }
}