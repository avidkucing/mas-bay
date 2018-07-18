import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
//our import
import HomeScreen from './screens/HomeScreen';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducer';
import { addMessage, receiveReply, getReply } from './actions';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
