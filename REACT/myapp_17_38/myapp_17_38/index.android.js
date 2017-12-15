/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator }
  from 'react-navigation';
import LoginComponent
  from './app/components/project/login';
import MainComponent
  from './app/components/project/main';
import ProductListComponent
  from './app/components/project/productList';
import UserListComponent 
  from './app/components/project/userList';

const myRouter = StackNavigator({
 
  myLogin: {
    screen: LoginComponent,
    navigationOptions: (() => {
      return {
        headerTitle: '登录',
        headerTitleStyle: { alignSelf: 'center' }
      }
    })
  },
  myMain: {
    screen: MainComponent,
    navigationOptions: (() => {
      return {
        headerLeft: null,
        headerTitle: '主页面',
        headerTitleStyle: { alignSelf: 'center' }
      }
    })
  },
  myList: {
    screen: ProductListComponent,
    navigationOptions: (() => {
      return {
        headerLeft: null,
        headerTitle: '商品列表',
        headerTitleStyle: { alignSelf: 'center' }
      }
    })
  },
  myUserList:{screen:UserListComponent}

});

AppRegistry.registerComponent(
  'myapp', () => myRouter);
