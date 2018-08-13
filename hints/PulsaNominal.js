import React, { Component } from 'react';
import { View, TouchableOpacity, } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { mainColor } from '../styles';
import { addMessage, getReply, changeHint } from '../actions';
import { selectContactPhone } from 'react-native-select-contact';


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
                height: 150,
                width: 360,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                }}
            >
                <TouchableOpacity
                    onPress={()=>{
                        addMessage('5.000', true);
                        getReply('5000');
                        changeHint();
                    }}
                    style={{
                        height: 48,
                        width: 100,
                        borderRadius: 5,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 5,
                        shadowOffset: { height: 2, width: 2 },
                        shadowColor: 'black',
                        shadowOpacity: 0.3,
                        marginRight: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Lato-Bold',
                            fontSize: 20,
                            color: '#666',
                        }}
                    >5.000</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        addMessage('10.000', true);
                        getReply('10000')
                        changeHint();
                    }}
                    style={{
                        height: 48,
                        width: 100,
                        borderRadius: 5,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 5,
                        shadowOffset: { height: 2, width: 2 },
                        shadowColor: 'black',
                        shadowOpacity: 0.3,
                        marginRight: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Lato-Bold',
                            fontSize: 20,
                            color: '#666',
                        }}
                    >10.000</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        addMessage('20.000', true);
                        getReply('20000');
                        changeHint();
                    }}
                    style={{
                        height: 48,
                        width: 100,
                        borderRadius: 5,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 5,
                        shadowOffset: { height: 2, width: 2 },
                        shadowColor: 'black',
                        shadowOpacity: 0.3,
                        marginRight: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Lato-Bold',
                            fontSize: 20,
                            color: '#666',
                        }}
                    >20.000</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <TouchableOpacity
                    onPress={()=>{
                        addMessage('25.000', true);
                        getReply('25000');
                        changeHint();
                    }}
                    style={{
                        height: 48,
                        width: 100,
                        borderRadius: 5,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 5,
                        shadowOffset: { height: 2, width: 2 },
                        shadowColor: 'black',
                        shadowOpacity: 0.3,
                        marginRight: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Lato-Bold',
                            fontSize: 20,
                            color: '#666',
                        }}
                    >25.000</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        addMessage('50.000', true);
                        getReply('50000');
                        changeHint();
                    }}
                    style={{
                        height: 48,
                        width: 100,
                        borderRadius: 5,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 5,
                        shadowOffset: { height: 2, width: 2 },
                        shadowColor: 'black',
                        shadowOpacity: 0.3,
                        marginRight: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Lato-Bold',
                            fontSize: 20,
                            color: '#666',
                        }}
                    >50.000</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        addMessage('100.000', true);
                        getReply('100000');
                        changeHint();
                    }}
                    style={{
                        height: 48,
                        width: 100,
                        borderRadius: 5,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 5,
                        shadowOffset: { height: 2, width: 2 },
                        shadowColor: 'black',
                        shadowOpacity: 0.3,
                        marginRight: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Lato-Bold',
                            fontSize: 20,
                            color: '#666',
                        }}
                    >100.000</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const PulsaNominal = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)  

export default PulsaNominal;

