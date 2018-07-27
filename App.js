import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
//our import
import rootReducer from './reducer';
import ChatScreen from './screens/ChatScreen';
import ProfilScreen from './screens/ProfilScreen';
import RiwayatScreen from './screens/RiwayatScreen';
import LoginScreen from './screens/LoginScreen';
import { mainColor, shadeColor, backgroundColor } from './styles';
import LoadingIndicator from './containers/LoadingIndicator';


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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

const RootStack = createMaterialTopTabNavigator(
  {
    Profil: {
      screen: ProfilStack,
    },
    Chat: { 
      screen: ChatScreen, 
    },
    Riwayat: {
      screen: RiwayatScreen,
    }
  },
  {
    initialRouteName: 'Chat',
    tabBarOptions: {
      upperCaseLabel: false,
      activeTintColor: mainColor,
      inactiveTintColor: shadeColor,
      indicatorStyle: {
        backgroundColor: mainColor,
      },
      labelStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'roboto',
      },
      style: {
        height: 60,
        backgroundColor: backgroundColor,
        elevation: 0,
      }
    }

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
