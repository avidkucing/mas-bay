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

const nominal = ['5000', '10000', '20000']
const nominal2 = ['25000', '50000', '100000']

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
            {nominal.map((nominal)=>
                <TouchableOpacity
                    key={nominal}
                    onPress={()=>{
                        addMessage(nominal, true);
                        getReply(nominal);
                        changeHint();
                    }}
                    style={{
                        height: 48,
                        width: 80,
                        borderRadius: 5,
                        backgroundColor: mainColor,
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
                            fontSize: 16,
                            color: '#fff',
                        }}
                    >{nominal}</Text>
                </TouchableOpacity>
            )}
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                }}
            >
            {nominal2.map((nominal)=>
                <TouchableOpacity
                    key={nominal}
                    onPress={()=>{
                        addMessage(nominal, true);
                        getReply(nominal);
                        changeHint();
                    }}
                    style={{
                        height: 48,
                        width: 80,
                        borderRadius: 5,
                        backgroundColor: mainColor,
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
                            fontSize: 16,
                            color: '#fff',
                        }}
                    >{nominal}</Text>
                </TouchableOpacity>
            )}
            </View>
        </View>
    )
}

const PulsaNominal = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)  

export default PulsaNominal;

