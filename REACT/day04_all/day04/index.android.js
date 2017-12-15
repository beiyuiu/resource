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
import Demo01Component from 
'./app/components/demo01_first/demo01'
import Demo02Component from 
'./app/components/demo02_view/demo02'
import Demo03Component from 
'./app/components/demo03_stylesheet/demo03'
import Demo04Component from 
'./app/components/demo04_state/demo04'
import Demo05Component from 
'./app/components/demo05_button/demo05'

export default class myapp extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Demo05Component></Demo05Component>
        <Text style={styles.welcome}>
          Welcome to Tedu!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myapp', () => myapp);
