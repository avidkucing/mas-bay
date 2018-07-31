import React, { Component } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { View, TouchableWithoutFeedback, ToastAndroid, TouchableOpacity } from 'react-native';
import { FormInput, Text, Button, FormLabel } from 'react-native-elements';
import { connect } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';

//our import
import { screens, inputComponents, mainColor, backgroundColor } from '../styles/chat';
import TitleBar from '../components/TitleBar';
import CurrentChat from '../containers/CurrentChat';
import CurrentHint from '../containers/CurrentHint';
import InputContainer from '../containers/InputContainer';
import ButtonContainer from '../containers/ButtonContainer';
import { setEmailValue, setPasswordValue, login, logout, getSaldo, setSession, setName, getRiwayat, getLoginStatus } from '../actions';
import TextPrimary from '../components/TextPrimary';
import ButtonPrimary from '../components/ButtonPrimary';
import LoadingIndicator from '../containers/LoadingIndicator';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  setEmailValue: (text) => dispatch(setEmailValue(text)),
  setPasswordValue: (text) => dispatch(setPasswordValue(text)),
  login: () => dispatch(login()),
  logout: () => dispatch(logout()),
  getSaldo: (text) => dispatch(getSaldo(text)),
  setSession: (text) => dispatch(setSession(text)),
  setName: (text) => dispatch(setName(text)),
  getRiwayat: (text) => dispatch(getRiwayat(text)),
  getLoginStatus: (userId, password, session) => dispatch(getLoginStatus(userId, password, session)),
})

class Login extends Component {

  render() {
    if (this.props.state.isLoggedIn) {
        //this.props.navigation.navigate('Profil');
    }

    return (
      <View style={screens.loginContainer}>
        <View 
            style={{
                alignItems: 'center',
            }}
        >
            <FormInput
                value={this.props.state.emailValue}
                onChangeText={(text) => {
                    this.props.setEmailValue(text.toLocaleLowerCase());
                }}
                placeholder='Email'
                placeholderTextColor={backgroundColor}
                underlineColorAndroid='transparent'
                containerStyle={inputComponents.loginContainer}
                inputStyle={inputComponents.loginInput} 
            />
            <FormInput
                placeholder='Password'
                placeholderTextColor={backgroundColor}
                value={this.props.state.passwordValue}
                onChangeText={(text) => {
                    this.props.setPasswordValue(text);
                }} 
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                containerStyle={inputComponents.loginContainer}
                inputStyle={inputComponents.loginInput} 
            />
            <ButtonPrimary
                text='Login'
                onPress={()=>{
                    this.props.getLoginStatus(this.props.state.emailValue, this.props.state.passwordValue, this.props.state.session)
                }}
            />
            <View
                flexDirection='row'
                style={{
                    marginTop: 40,
                }}
            >
                <TextPrimary
                    text='Belum punya akun? '
                />
                <TouchableOpacity
                    onPress={()=>{
                        ToastAndroid.show('Nanti ya', ToastAndroid.SHORT)
                    }}
                >
                    <TextPrimary
                        text='Daftar.'
                        type='bold'
                    />
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const LoginScreen = connect(
  mapStateToProps, mapDispatchToProps
)(Login)

export default LoginScreen;


