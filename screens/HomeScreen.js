import React, { Component } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { View, Image } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { connect } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';

//our import
import { screens, mainColor } from '../styles/chat';
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
        <View
          flex={3}
        >
          <Text>Tes</Text>
        </View>
        <View
          flex={3}
          justifyContent='center'
          backgroundColor='blue'
        >
          <Text>Tes</Text>
        </View>
        <View
          flex={2}
          flexDirection='row'
        >
          <View
            flex={1}
            flexDirection='row'
            justifyContent='flex-start'
            alignItems='center'
          >
            <Icon
              name='keyboard-arrow-left'
              type='material-icons'
              color={mainColor}
              size={36}
            />
            <Text
              style={{
                fontSize: 24,
              }}
            >Beli produk</Text>
          </View>
          <View
            flex={1}
            flexDirection='row'   
            justifyContent='flex-end'
            alignItems='center'
          >
            <View
              alignItems='flex-end'
            >
              <Text>Lihat profil</Text>
              <Text>dan riwayat</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const HomeScreen = connect(
  mapStateToProps, mapDispatchToProps
)(Home)

export default HomeScreen;


