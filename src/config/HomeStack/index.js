import React from 'react';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from '../../pages/Home/index';

export const HomeStack = StackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
      },
    }
});