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
import Demo06Component from 
'./app/components/demo06_lianxi/demo06'
import Demo07Component from 
'./app/components/demo07_image/demo07'
import  Demo08Component from 
'./app/components/demo08_flatlist/demo08'
import Demo09Component from 
'./app/components/demo09_to/demo09'
import Demo10Component from 
'./app/components/demo10_lianxi/demo10'
import Demo11Component from 
'./app/components/demo11_fetch/demo11'
import Demo12Component from 
'./app/components/demo12_textinput/demo12'
import Demo13Component from 
'./app/components/demo13_flex/demo13'
import ToDoBoxComponent from 
'./app/components/todobox/ToDoBox'


export default class myapp extends Component {
  render() {

    return <ToDoBoxComponent/>  ;
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
