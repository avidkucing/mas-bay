import React, { Component } from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {  } from 'react-native-elements';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { AndroidBackHandler } from 'react-navigation-backhandler';
//our import
import rootReducer from './reducer';
import LoadingIndicator from './components/LoadingIndicator';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Profil from './screens/Profil';
import News from './screens/News';
import Riwayat from './screens/Riwayat';
import Notif from './screens/Notif';
import Setting from './screens/Setting';
import Login from './screens/Login';
import Daftar from './screens/Daftar';
import Welcome from './screens/Welcome';
import { mainColor } from './styles';
import BottomTab from './components/BottomTab';

import NavigationService from './NavigationService';



const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const MenuStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Profil: { 
      screen: Profil, 
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
    initialRouteName: 'Home',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'transparent',
    },
    navigationOptions: {

    }
  }
)

class Menu extends Component {
  onBackButtonPressAndroid = () => {
    return true;
  };

  render() {
    return (
      <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
        <MenuStack ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
        <BottomTab 
          onPressLeft={()=>NavigationService.navigate('Home')}
          onPress={()=>this.props.navigation.navigate('Chat')}
          onPressRight={()=>NavigationService.navigate('Profil')}
        />
      </AndroidBackHandler>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Menu: {
      screen: Menu,
    },
    Chat: {
      screen: Chat,
    },
  },
  {
    initialRouteName: 'Menu',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#fff',
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
