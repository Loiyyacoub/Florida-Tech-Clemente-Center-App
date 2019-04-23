/**
 * @format
 */

// Imports
import React from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component

const App = () => (
  <View>
    <StatusBar barStyle="light-content" hidden={false} />
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render component to screen
AppRegistry.registerComponent('CCApp', () => App);
