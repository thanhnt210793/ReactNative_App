import React from 'react';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { HomeStack } from './HomeStack';
import { FriendsStack } from './FriendsStack';
import { ProfileStack } from './ProfileStack';
import { FindStack } from './FindStack';

import homeIcon from '../images/home-icon.png';
import profileIcon from '../images/user-icon.png';

export const Tabs = TabNavigator({
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={[styles.icon, { tintColor }]}
            source={homeIcon}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={[styles.icon, { tintColor }]}
            source={profileIcon}
          />
        ),
      },
    },
    Friends: {
      screen: FriendsStack,
      navigationOptions: {
        tabBarLabel: 'Friends',
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={[styles.icon, { tintColor }]}
            source={profileIcon}
          />
        ),
      },
    },
    Find: {
      screen: FindStack,
      navigationOptions: {
        tabBarLabel: 'Find',
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={[styles.icon, { tintColor }]}
            source={profileIcon}
          />
        ),
      },
    },
  });