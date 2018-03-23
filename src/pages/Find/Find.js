import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default class Find extends Component{
    render() {
        return (
            <View >
                <Text style={styles.styleFind}>Find</Text>
            </View>
        )
    }
}