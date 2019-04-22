/**
 * @format
 */
//import a library to help create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import HomeList from './src/components/HomeList';
import Second from './src/components/Second';
import Events from './src/components/Events';

//create Component
const App = () => (
  <View>
    <Header headerText={'FIT Clemente Center'} />
    <HomeList />
    <Second />
    <Events />

  </View>
);


//render it to the device
AppRegistry.registerComponent('clemente', () => App);
