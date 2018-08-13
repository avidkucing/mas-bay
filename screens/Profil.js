import React, { Component } from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import { Avatar, Text, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { mainColor } from '../styles';
import { addMessage, getReply } from '../actions';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
  getReply: (text) => dispatch(getReply(text)),  
})

class MyComponent extends Component {

  render() {
    const list = [
      {
        title: 'Notifikasi',
        icon: 'notifications',
        onPress: ()=>this.props.onPressNotif(),
      },
      {
        title: 'Riwayat Pembelian',
        icon: 'history',
        onPress: ()=>this.props.onPressRiwayat(),
      },
      {
        title: 'Pengaturan',
        icon: 'settings',
        onPress: ()=>this.props.onPressSettings(),
      },
      {
        title: 'Logout',
        icon: 'power-settings-new',
        onPress: ()=>this.props.onPressLogout(),
      },
    ]

    return (
      <View
          style={{
            flex: 1,
            alignItems: 'center',
            width: 360,
            //marginLeft: Platform.OS==='ios' ? 8 : 0,
            marginRight: Platform.OS==='ios' ? 8 : 0,
            //opacity: 0,
          }}
        >
          <Avatar
            rounded
            source={require('../assets/news1.jpeg')}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            overlayContainerStyle={{
              height: 100,
              width: 100,
              borderRadius: 50,
            }}
            containerStyle={{
              height: 100,
              width: 100,
              borderRadius: 50,
              marginTop: Platform.OS==='ios' ? 50 : 40,
              elevation: 10,
              shadowOffset: { height: 3, width: 5 },
              shadowColor: 'black',
              shadowOpacity: 0.3,
            }}
            avatarStyle={{
              height: 100,
              width: 100,
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#333',
              marginTop: 10,
            }}
          >Avid</Text>
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
              this.props.onPressTopUp();
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
    );
  }
}

const Profil = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Profil;


