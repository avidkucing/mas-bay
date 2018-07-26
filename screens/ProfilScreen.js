import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, ToastAndroid, TouchableOpacity } from 'react-native';
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
import { setEmailValue, setPasswordValue, login, logout, getSaldo, setSession, setName, getRiwayat } from '../actions';
import TextPrimary from '../components/TextPrimary';
import ButtonPrimary from '../components/ButtonPrimary';

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
        <TextPrimary
            text='Email'
            type='bold'
            mb={10}
        />
        <FormInput
            onChangeText={(text) => {
                this.props.setEmailValue(text.toLocaleLowerCase());
            }}
            keyboardType='email-address'
            underlineColorAndroid='transparent'
            containerStyle={inputComponents.loginContainer}
            inputStyle={inputComponents.loginInput} 
        />
        <TextPrimary
            text='Password'
            type='bold'
            mb={10}
        />
        <FormInput
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
                axios.post(this.props.state.baseURL+'/login', data)
                .then((response) => {
                    ToastAndroid.show(response.data.isloggedin.toString(), ToastAndroid.SHORT);
                    if (response.data.isloggedin) {
                        this.props.login();
                        this.props.setSession(response.data.session);
                        this.props.setName(response.data.name);
                        this.props.getSaldo(this.props.state.session);
                        this.props.getRiwayat(this.props.state.session);
                    }
                });
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
    )};

    const renderProfile = () => {
        if (this.props.state.isLoggedIn) return (
            <View 
                style={{
                    alignItems: 'center',
                }}
            >
                <TextPrimary
                    text={'Hai '+this.props.state.name+'!'}
                    type='bold'
                    size={24}
                    mb={10}
                />
                <TextPrimary
                    text='Saldo kamu:'
                    size={24}
                    mb={10}
                />
                <TextPrimary
                    text={this.props.state.saldo}
                    type='bold'
                    size={36}
                    mb={10}
                />
                <ButtonPrimary
                    text='Isi saldo'
                    onPress={()=>{
                        ToastAndroid.show('Nanti ya', ToastAndroid.SHORT);
                    }}
                />
                <TouchableOpacity
                    onPress={()=>{
                        this.props.logout();
                    }}
                    style={{
                        marginTop: 200,
                    }}
                >
                    <TextPrimary
                        text='Logout'
                        type='bold'
                    />
                </TouchableOpacity>
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


