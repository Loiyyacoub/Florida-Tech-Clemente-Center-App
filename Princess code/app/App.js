/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator,createAppContainer,createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Header from './app/components/header';
//import router from './router';

type Props = {};
class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Home </Text>
        <Button
                  title="Go to Hours"
                  onPress={() => this.props.navigation.navigate('Hours')}
                />
      </View>
    );
  }
}

class Hours extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Hours </Text>
      </View>
    );
  }
}

class Schedule extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Schedule </Text>
      </View>
    );
  }
}

class Favorites extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Favorites </Text>
      </View>
    );
  }
}

class Menu extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Menu </Text>
        <Button
           title="Menu"
           //onPress={() => this.props.navigation.navigate.openDrawer()}
                        />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
{
  Homepage: HomeScreen,
  Hours: Hours,
  Schedule: Schedule,
  Favorites: Favorites,
  Menu: Menu,
},
{
defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Homepage') {
          iconName = `ios-home`;
          //IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Hours') {
          iconName = `ios-clock`;
        }  else if (routeName === 'Schedule') {
          iconName = `ios-calendar`;
        } else if (routeName === 'Favorites') {
          iconName = `ios-heart`;
        } else if (routeName === 'Menu') {
          iconName = `ios-list`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },

}

);


//export default createAppContainer(MyDrawerNavigator);

export default createAppContainer(TabNavigator);
//export default class App extends Component<Props> {
//  render() {
//    return <AppContainer />;
//  }
//}

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
  icon: {
      width: 24,
      height: 24,
    },
});
