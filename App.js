import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { createStackNavigator,  } from 'react-navigation';
import { Icon, Text } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
//our import
import rootReducer from './reducer';
import ChatScreen from './screens/ChatScreen';
import ProfilScreen from './screens/ProfilScreen';
import RiwayatScreen from './screens/RiwayatScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

import { mainColor, shadeColor, backgroundColor } from './styles';
import LoadingIndicator from './containers/LoadingIndicator';


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    cardStyle: {
      //backgroundColor: 'transparent',
    },
    navigationOptions: {
      
    }
  }
)

const ProfilStack = createStackNavigator(
  {
    Profil: {
      screen: ProfilScreen,
    },
    Login: { 
      screen: LoginScreen, 
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'transparent',
    },
    navigationOptions: {
      
    }
  }
)

const RootStack = createMaterialBottomTabNavigator(
  {
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarIcon: (
          <Icon
            name='chat-bubble'
            type='material-icons'
            color='black'
            containerStyle={{
              marginTop: 5,
            }}
          />
        )
      } 
    },
    Home: { 
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: (
          <Icon
            name='home'
            type='material-icons'
            color='black'
            containerStyle={{
              marginTop: 5,
            }}
          />
        ),
        tabBarLabel: (
          <Text
          >
            Home
          </Text>
        )
      } 
    },
    Profil: {
      screen: ProfilStack,
      navigationOptions: {
        tabBarIcon: (
          <Icon
            name='person'
            type='material-icons'
            color='black'
            containerStyle={{
              marginTop: 5,
            }}
          />
        )
      } 
    }
  },
  {
    initialRouteName: 'Home',
    swipeEnabled: true,
    shifting: true,
    //labeled: false,
    barStyle: {
      backgroundColor: 'white',
      height: 64,
    },
  }
);

export default class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <ImageBackground
          source={require('./Man-02.jpg')}
          style={{
            flex: 1,
          }}
        >
        <RootStack />
        <LoadingIndicator />
        </ImageBackground>
      </Provider>
    );
  }
}
