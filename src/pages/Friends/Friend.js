import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default class Friend extends Component{
    render() {
        return (
            <View >
                <Text style={styles.styleFriend}>Friend</Text>
            </View>
        )
    }
}