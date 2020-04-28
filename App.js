/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text} from 'react-native';
import Home from './HomeIki';
import {creatAppContainer, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AddUser from './TestIki';

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  AddUser: {
    screen: AddUser,
  },
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
