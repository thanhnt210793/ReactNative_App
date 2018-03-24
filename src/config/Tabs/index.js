import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { HomeStack } from '../HomeStack/index';
import { FriendsStack } from '../FriendsStack/index';
import { ProfileStack } from '../ProfileStack/index';
import { FindStack } from '../FindStack/index';

import homeIcon from '../../images/home-icon.png';
import profileIcon from '../../images/user-icon.png';
import friendIcon from '../../images/Friend.png';
import findIcon from '../../images/find.png';
import styles from './styles';

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
            source={friendIcon}
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
            source={findIcon}
          />
        ),
      },
    },
  },
  {    
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  });