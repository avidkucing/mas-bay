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

    return (
      <View style={screens.loginContainer}>
        <View 
            style={{
                alignItems: 'center',
            }}
        >
            <TextPrimary
                text={'Hai '+this.props.state.name.charAt(0).toUpperCase()+
                    this.props.state.name.slice(1)+'!'}
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
                    this.props.navigation.navigate('Login');
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
      </View>
    );
  }
}

const ProfilScreen = connect(
  mapStateToProps, mapDispatchToProps
)(Profil)

export default ProfilScreen;


