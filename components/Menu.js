import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { Text, Icon } from 'react-native-elements';

import NavigationService from '../NavigationService';

const MenuItem = ({ onPress, name, type, color, text }) => {
    return(
      <TouchableOpacity
        onPress={onPress}
      >
      <View
        style={{
          width: 90,
          paddingTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon
          name={name}
          type={type || 'material-community'}
          size={30}
          color={color}
          underlayColor='transparent'
          containerStyle={{
            marginBottom: 10,
          }}
          onPress={onPress}
        />
        <Text
          style={{
            fontFamily: 'Lato-Regular',
            textAlign: 'center',
            fontSize: 14,
            color: '#666',
          }}
        >{text}</Text>
      </View>
      </TouchableOpacity>
    )
  }

const Menu = ({  }) => {
    return(
        <View
            style={{
                height: 200,
                backgroundColor: '#fff',
            }}
        >
            <View
              style={{
                height: 100,
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}
            >
              <MenuItem 
                name='newspaper'
                color='#666'
                text='Info dan Promo'
                onPress={()=>NavigationService.navigate('Home')}
              />
              <MenuItem 
                name='history'
                color='#666'
                text='Riwayat Transaksi'
              />
              <MenuItem 
                name='notifications'
                type='material-icons'
                color='#666'
                text='Notifikasi'
              />
              <MenuItem 
                name='account-circle'
                color='#666'
                text='Akun'
                onPress={()=>NavigationService.navigate('Profil')}
              />
            </View>
            <View
              style={{
                height: 100,
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}
            >
              <MenuItem 
                name='help-box'
                color='#666'
                text='Bantuan'
              />
              <MenuItem 
                name='settings'
                color='#666'
                text='Pengaturan'
              />
            </View>
        </View>
    )
}

export default Menu;