import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {  } from 'react-native-elements';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
//our import
import rootReducer from './reducer';
import Chat from './screens/Chat';
import LoadingIndicator from './containers/LoadingIndicator';
import Home from './screens/Home';



const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Chat: { 
      screen: Chat, 
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

/*const RootStack = createMaterialTopTabNavigator(
  {
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          return (<Icon
            //reverse={focused ? true : false}
            name='chat-bubble'
            type='material-icons'
            size={focused ? 28 : 24}
            color={tintColor}
          />
        )},
        tabBarVisible: false,
      } 
    },
    Riwayat: {
      screen: RiwayatScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          return (<Icon
            //reverse={focused ? true : false}
            name='history'
            type='material-icons'
            size={focused ? 28 : 24}
            color={tintColor}
          />)
        },
        tabBarVisible: false,
      } 
    }
  },
  {
    initialRouteName: 'Chat',
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true,
      activeTintColor: mainColor,
      inactiveTintColor: '#666',
      tabStyle: {
        height: 64,
      },
      labelStyle: {
        margin: 5,
      },
      indicatorStyle: {
        backgroundColor: mainColor,
      },
      iconStyle: {
        height: 100,
        width: 100,
      },
      style: {
        backgroundColor: '#fff',
        //borderTopWidth: 1,
        //borderColor: '#ddd'
        elevation: 5,
        marginTop: 0,
      }
    }
  }
);*/

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
        <RootStack />
        <LoadingIndicator />
        </ImageBackground>
      </Provider>
    );
  }
}
