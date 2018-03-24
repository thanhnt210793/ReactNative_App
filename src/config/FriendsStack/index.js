import React from 'react';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Friend from '../../pages/Friends/index';

export const FriendsStack = StackNavigator({
    Friends: {
      screen: Friend,
      navigationOptions: {
        headerTitle: 'Friends',
    },
  }
});