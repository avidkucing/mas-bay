import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, ToastAndroid, TouchableHighlight } from 'react-native';
import { FormInput, Text, Button, FormLabel } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';

//our import
import { screens, inputComponents, mainColor, backgroundColor } from '../styles';
import TitleBar from '../components/TitleBar';
import CurrentChat from '../containers/CurrentChat';
import CurrentHint from '../containers/CurrentHint';
import InputContainer from '../containers/InputContainer';
import ButtonContainer from '../containers/ButtonContainer';
import { setEmailValue, setPasswordValue, login, logout, getSaldo, setSession, setName } from '../actions';

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
})

class Profil extends Component {

  render() {

    const data = {
        userId: this.props.state.emailValue,
        password: this.props.state.passwordValue,
    };

    const renderLoginComponents = () => { if (!this.props.state.isLoggedIn) return (
    <View 
        style={{
            alignItems: 'center',
        }}
    >
        <FormLabel
            containerStyle={{
                marginBottom: 10,
            }}
            labelStyle={{
                color: mainColor,
                fontSize: 14,
            }}
        >Email</FormLabel>
        <FormInput
            onFocus={()=>{

            }}
            onChangeText={(text) => {
                this.props.setEmailValue(text.toLocaleLowerCase());
            }}
            onSubmitEditing={() => {

            }}
            onEndEditing={()=>{

            }}
            keyboardType='email-address'
            underlineColorAndroid='transparent'
            containerStyle={inputComponents.loginContainer}
            inputStyle={inputComponents.loginInput} 
        />
        <FormLabel
            containerStyle={{
                marginBottom: 10,
            }}
            labelStyle={{
                color: mainColor,
                fontSize: 14,
            }}
        >Password</FormLabel>
        <FormInput
            onChangeText={(text) => {
                this.props.setPasswordValue(text);
            }} 
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            containerStyle={inputComponents.loginContainer}
            inputStyle={inputComponents.loginInput} 
        />
        <Button
            title='Login'
            onPress={()=>{
                axios.post(this.props.state.baseURL+'/login', data)
                .then((response) => {
                        ToastAndroid.show(response.data.isloggedin.toString(), ToastAndroid.SHORT);
                        if (response.data.isloggedin) {
                            this.props.login();
                            this.props.setSession(response.data.session);
                            this.props.setName(response.data.name);
                        }
                    }
                );
            }}
            containerViewStyle={inputComponents.loginButtonContainer}
            textStyle={{
                color: backgroundColor,
                fontSize: 14,
                fontWeight: 'bold',
                margin: 5,
            }}
            buttonStyle={{
                borderRadius: 25,
                backgroundColor: mainColor,
            }}
        />
        <View
            flexDirection='row'
            style={{
                marginTop: 40,
            }}
        >
            <Text
                style={{
                    color: mainColor,
                }}
            >Belum punya akun? </Text>
            <TouchableHighlight
                onPress={()=>{
                    ToastAndroid.show('Nanti ya', ToastAndroid.SHORT)
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: mainColor,
                    }}
                >Daftar.</Text>
            </TouchableHighlight>
        </View>
    </View>
    )};

    const renderProfile = () => {
        this.props.getSaldo(this.props.state.session);
        if (this.props.state.isLoggedIn) return (
            <View 
                style={{
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: mainColor,
                        fontSize: 24,
                        marginBottom: 10,
                    }}
                >Hai {this.props.state.name}!</Text>
                <Text
                    style={{
                        color: mainColor,
                        fontSize: 24,
                        marginBottom: 10,
                    }}
                >Saldo kamu:</Text>
                <Text
                    style={{
                        fontWeight: 'bold',
                        color: mainColor,
                        fontSize: 36,
                    }}
                >{this.props.state.saldo}</Text>
                <Button
                    title='Isi saldo'
                    onPress={()=>{
                        ToastAndroid.show('Nanti ya', ToastAndroid.SHORT);
                    }}
                    containerViewStyle={{
                        marginTop: 40,
                    }}
                    textStyle={{
                        color: backgroundColor,
                        fontSize: 14,
                        fontWeight: 'bold',
                        margin: 5,
                    }}
                    buttonStyle={{
                        borderRadius: 25,
                        backgroundColor: mainColor,
                    }}
                />
                <TouchableHighlight
                    onPress={()=>{
                        this.props.logout();
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: mainColor,
                            marginTop: 200,
                            textDecorationLine: 'underline',
                        }}
                    >Logout</Text>
                </TouchableHighlight>
            </View>
            
        )
    }

    const loginComponents = renderLoginComponents();
    const profile = renderProfile();

    return (
      <View style={screens.loginContainer}>
        {loginComponents}
        {profile}
      </View>
    );
  }
}

const ProfilScreen = connect(
  mapStateToProps, mapDispatchToProps
)(Profil)

export default ProfilScreen;


