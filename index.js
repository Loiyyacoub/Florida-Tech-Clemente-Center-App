/**
 * @format
 */
//import a library to help create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import HomeList from './src/components/HomeList';

//create Component
const App = () => (
  <View>
    <Header headerText={'Florida Tech Sports and Rec'} />
    <HomeList />
  </View>
);


//render it to the device
AppRegistry.registerComponent('clemente', () => App);
