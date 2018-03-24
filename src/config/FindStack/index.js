import React from 'react';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Find from '../../pages/Find/index';

export const FindStack = StackNavigator({
    Find: {
      screen: Find,
      navigationOptions: {
        headerTitle: 'Find',
    },
  }
});