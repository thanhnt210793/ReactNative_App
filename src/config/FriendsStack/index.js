import React from 'react';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Friends from '../pages/Friends';

export const FriendsStack = StackNavigator({
    Friends: {
      screen: Friend,
      navigationOptions: {
        headerTitle: 'Friends',
    },
  }
});