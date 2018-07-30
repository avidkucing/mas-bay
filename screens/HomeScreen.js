import React, { Component } from 'react';
import { View, ToastAndroid, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

//our import
import { screens } from '../styles';
import { setEmailValue, setPasswordValue, login, logout, getSaldo, setSession, setName, getRiwayat } from '../actions';
import TextPrimary from '../components/TextPrimary';
import ButtonPrimary from '../components/ButtonPrimary';
import LoadingIndicator from '../containers/LoadingIndicator';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({

})

class Home extends Component {

  render() {

    return (
      <View style={screens.loginContainer}>
        
      </View>
    );
  }
}

const HomeScreen = connect(
  mapStateToProps, mapDispatchToProps
)(Home)

export default HomeScreen;


