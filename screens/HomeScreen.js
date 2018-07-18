import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';
//our import
import TitleBar from '../components/TitleBar';
import CurrentChat from '../containers/CurrentChat';
import CurrentHint from '../containers/CurrentHint';
import InputContainer from '../containers/InputContainer';

const mainColor = '#fabc3d';
const secondaryColor = '#3e3e3f';
const tintColor= '#f37a10';
const shadeColor= '#fddea0';
const white= 'white';

export default class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TitleBar />
        <CurrentChat />
        <CurrentHint />
        <InputContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

