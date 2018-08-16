import React, { Component } from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import { Avatar, Text, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { AndroidBackHandler } from 'react-navigation-backhandler';
//our import
import { styles, mainColor } from '../styles';
import { addMessage, getReply } from '../actions';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
  getReply: (text) => dispatch(getReply(text)),  
})

class MyComponent extends Component {
  onBackButtonPressAndroid = () => {
    return true;
  };

  render() {
    const list = [
      {
        title: 'Notifikasi',
        icon: 'notifications',
        onPress: ()=>this.props.navigation.navigate('Notif')
      },
      {
        title: 'Riwayat Pembelian',
        icon: 'history',
        onPress: ()=>this.props.navigation.navigate('Riwayat')
      },
      {
        title: 'Pengaturan',
        icon: 'settings',
        onPress: ()=>this.props.navigation.navigate('Setting')
      },
      {
        title: 'Logout',
        icon: 'power-settings-new',
        onPress: ()=>this.props.navigation.navigate('Daftar')
      },
    ]
    
    return (
      <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
      <View style={styles.rootContainer}>    
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: 360,
          }}
        >
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
              color: '#333',
            }}
          >SALDO KAMU:</Text>
          <Text
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              color: '#333',
            }}
          >Rp 576,988</Text>
          <TouchableOpacity
            onPress={()=>{
              this.props.navigation.navigate('Chat');
              this.props.addMessage('Top up', true);
              this.props.getReply('Top up');
            }}
          >
            <View
              style={{
                height: 40,
                width: 80,
                backgroundColor: mainColor,
                borderRadius: 10,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              >TOP UP</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            width: 360,
            justifyContent: 'flex-end',
            //marginBottom: 5,
          }}
        >
          <List>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{
                    name: item.icon,
                  }}
                  onPress={()=>item.onPress()}
                />
              ))
            }
          </List>
        </View>
      </View>
      </AndroidBackHandler>
    );
  }
}

const Profil = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Profil;


