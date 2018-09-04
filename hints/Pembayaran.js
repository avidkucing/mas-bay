import React, { Component } from 'react';
import { View, TouchableOpacity, } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { mainColor } from '../styles';
import { addMessage, getReply, changeHint } from '../actions';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),      
    getReply: (text) => dispatch(getReply(text)),     
    changeHint: () => dispatch(changeHint()),
})

const MyComponent = ({ addMessage, getReply, changeHint }) => {
    return (
        <View
            style={{
                height: 100,
                width: 360,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
            <TouchableOpacity
                onPress={()=>{
                    addMessage('Saldo', true);
                    getReply('Saldo');
                }}
                style={{
                    flexDirection: 'row',
                    height: 48,
                    width: 100,
                    backgroundColor: mainColor,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5,
                    shadowOffset: { height: 2, width: 2 },
                    shadowColor: 'black',
                    shadowOpacity: 0.3,
                    marginBottom: 20,
                    marginRight: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: '#fff',
                        fontFamily: 'Lato-Bold',
                    }}
                >Saldo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    addMessage('Transfer', true);
                    getReply('Transfer');
                    changeHint();
                }}
                style={{
                    flexDirection: 'row',
                    height: 48,
                    width: 100,
                    backgroundColor: mainColor,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5,
                    shadowOffset: { height: 2, width: 2 },
                    shadowColor: 'black',
                    shadowOpacity: 0.3,
                    marginBottom: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: '#fff',
                        fontFamily: 'Lato-Bold',
                    }}
                >Transfer</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const Pembayaran = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)  

export default Pembayaran;

