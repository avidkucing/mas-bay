import React from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { mainColor } from '../styles';
//our import

const TitleBar = ({ title }) => {
        return (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            elevation: 1,
            shadowOffset: { height: -2 },
            shadowColor: 'black',
            shadowOpacity: 0.3,
            //borderBottomWidth: 5,
            //borderBottomColor: mainColor,
          }}
        >
          <Text
            style={{
              //marginTop: Platform.OS==='ios' ? 10 : 0,
              fontFamily: 'Lato-Bold',
              fontSize: 24,
              color: '#333',
            }}
          >{title}</Text>
        </View>
        )
    }

export default TitleBar;