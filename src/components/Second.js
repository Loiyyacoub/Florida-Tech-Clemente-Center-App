import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
//import NavigationBar from 'react-native-navigation-bar';
//    <View style = {{width: 50, height: 50}} />

class Second extends Component {
  render(){
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>  📊  How Busy is the Gym?</Text>
      </View>
    );
  }
}
const styles = {
  viewStyle:{
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 45,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle : {
    color: 'black',
    fontSize: 20
  }
};
export default Second;
