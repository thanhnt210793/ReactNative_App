import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Profile from '../../pages/Profile/index';
import UserDetail from '../../pages/Profile/UserDetail/index';

export const ProfileStack = StackNavigator({
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerTitle: 'Profile',
    },
    UserDetail: {
      screen: UserDetail,
      navigationOptions: {
        headerTitle: 'User Detail'
      }
    }
  }
});