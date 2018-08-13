import React, { Component } from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {  } from 'react-native-elements';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
//our import
import rootReducer from './reducer';
import LoadingIndicator from './components/LoadingIndicator';
import Home from './screens/Home';
import Chat from './screens/Chat';
import News from './screens/News';
import Riwayat from './screens/Riwayat';
import Notif from './screens/Notif';
import Setting from './screens/Setting';
import Login from './screens/Login';
import Daftar from './screens/Daftar';
import Welcome from './screens/Welcome';
import { mainColor } from './styles';



const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Chat: { 
      screen: Chat, 
    },
    News: { 
      screen: News,
    },
    Notif: {
      screen: Notif,
    },
    Riwayat: {
      screen: Riwayat,
    },
    Setting: {
      screen: Setting,
    },
    Login: {
      screen: Login,
    },
    Daftar: {
      screen: Daftar,
    },
    Welcome: {
      screen: Welcome,
    },
  },
  {
    initialRouteName: 'Daftar',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'transparent',
    },
    navigationOptions: {

    }
  }
)

export default class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <ImageBackground
          //source={require('./Man-02.jpg')}
          style={{
            flex: 1,
          }}
        >
        <StatusBar
          backgroundColor={mainColor}
          barStyle='dark-content'
        />
        <RootStack />
        <LoadingIndicator />
        </ImageBackground>
      </Provider>
    );
  }
}
