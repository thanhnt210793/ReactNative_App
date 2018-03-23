import React from 'react';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Profile from '../pages/Profile';

export const ProfileStack = StackNavigator({
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerTitle: 'Profile',
    },
  }
});