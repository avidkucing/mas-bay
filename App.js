import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
//our import
import rootReducer from './reducer';
import { addMessage, receiveReply, getReply } from './actions';
import HomeScreen from './screens/HomeScreen';


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
    store.dispatch(getReply('reset'));

    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
