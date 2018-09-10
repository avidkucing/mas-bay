import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity} from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { mainColor, tintColor } from '../styles';
import { addMessage, getReply, changeHint } from '../actions';
import NavigationService from '../NavigationService';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),      
    getReply: (text) => dispatch(getReply(text)),      
    changeHint: (number) => dispatch(changeHint(number)),
})

const UpdateTag = () => {
    return (
        <View
            style={{
                backgroundColor: tintColor,
                borderRadius: 5,
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                marginLeft: 20,
                marginRight: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    margin: 2,
                    color: '#fff',
                    textAlign: 'center',
                }}
            >UPDATE</Text>
        </View>
    )
}

const MyComponent = ({ name, type, size, color, text, addMessage, getReply, changeHint }) => {

    return (
        <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>

      <View
        style={{
          flex: 1,
          marginTop: 20,
          //marginBottom: 10,
        }}
      >
      <TouchableOpacity
        onPress={()=>{
            NavigationService.navigate('ProductInfo');
        }}
        flex={1}
      >
        <Icon
          name={name}
          type={type}
          size={size || 30}
          color={color || mainColor}
          iconStyle={{
            
          }}
          containerStyle={{
  
          }}
          
          />
        <Text
          style={{
            fontFamily: 'Lato-Regular',
            fontSize: 14,
            color: '#333',
            marginTop: 10,
            textAlign: 'center',
            textAlignVertical: 'top',
          }}
        >{text}</Text>
      </TouchableOpacity>
      </View>
      {text==='Pulsa' ? <UpdateTag /> : null}

      </View>
    );
  }

const ProductIcon = connect(
    mapStateToProps, mapDispatchToProps
)(MyComponent)  
  
export default ProductIcon;