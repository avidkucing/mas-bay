import React, { Component } from 'react';
import { View, TouchableOpacity, ToastAndroid, Platform, Image } from 'react-native';
import { Text, Button, FormInput, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import {  } from '../actions';



const IconedInput = ({ name, type, placeholder }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
            }}
        >
            <Icon
                name={name}
                type={type || 'material-icon'}
                color='#aaa'
                containerStyle={{
                    backgroundColor: '#fff',
                    width: 40,
                    height: 48,
                    marginRight: -20,
                    marginLeft: 20,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                }}
            />
            <FormInput
                //value={this.props.state.emailValue}
                onChangeText={(text) => {
                    //this.props.setEmailValue(text.toLocaleLowerCase());
                }}
                placeholder={placeholder}
                placeholderTextColor='#aaa'
                underlineColorAndroid='transparent'
                containerStyle={{
                    height: 48,
                    width: 240,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    backgroundColor: '#fff',
                    borderBottomWidth: 0,
                    justifyContent: 'center',
                    marginBottom: 10,
                }}
                inputStyle={{
                    fontSize: 14,
                    color: 'black',
                }} 
            />
        </View>
    )
}

export default IconedInput;