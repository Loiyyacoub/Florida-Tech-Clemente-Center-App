// Import libraries for making a registerComponent
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text></View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#8A1C13',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 25,
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },

  textStyle: {
    fontSize: 20,
    color: '#ffffff'
  }
};

// Make the component available to other parts of the app
export default Header;
