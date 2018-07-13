import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
//our import
import HomeScreen from './Screens/HomeScreen';


const RootStack = createStackNavigator(
  {
    Home: { 
      screen: HomeScreen, 
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    navigationOptions: () => ({
    
    }),
  }
);

export default class App extends Component {

  render() {
    return (
      <RootStack />
    );
  }
}
