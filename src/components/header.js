//import a library to help making Component
import React from 'react';
import { Text, View } from 'react-native';

//make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle:{
    backgroundColor: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    paddingTop: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle : {
    color: 'white',
    fontSize: 20
  }
};

//make the component available to other parts of the app
export default Header;
