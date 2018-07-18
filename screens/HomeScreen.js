import React, { Component } from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { Text } from 'react-native-elements';
import Voice from 'react-native-voice';
//our import
import { screens } from '../styles';
import TitleBar from '../components/TitleBar';
import CurrentChat from '../containers/CurrentChat';
import CurrentHint from '../containers/CurrentHint';
import InputContainer from '../containers/InputContainer';


export default class HomeScreen extends Component {

  render() {
    return (
      <View style={screens.homeContainer}>
        <TitleBar />
        <CurrentChat />
        <CurrentHint />
        <InputContainer />
      </View>
    );
  }
}



