import React, { Component } from 'react';
import { Animated, Easing, ImageBackground } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
//our import
import rootReducer from './reducer';
import { addMessage, receiveReply, getReply } from './actions';
import ChatScreen from './screens/ChatScreen';
import ProfilScreen from './screens/ProfilScreen';
import RiwayatScreen from './screens/RiwayatScreen';
import { mainColor, shadeColor, backgroundColor, tintColor } from './styles';


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const RootStack = createMaterialTopTabNavigator(
  {
    Profil: {
      screen: ProfilScreen,
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
        </ImageBackground>
      </Provider>
    );
  }
}
