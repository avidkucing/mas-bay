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
                height: 200,
                width: 360,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                }}
            >
                <Icon 
                    name='star'
                    type='material-icons'
                    color='#666'
                    size={14}
                    componentstyle={{
                        marginRight: 10,
                    }}
                />
                <Text
                    style={{
                        fontSize: 14,
                        color: '#666',
                        fontFamily: 'Lato-Regular',
                    }}
                >Sering dipakai:</Text>
            </View>
            <TouchableOpacity
                onPress={()=>{
                    addMessage('085692355339', true);
                    getReply('085692355339');
                    changeHint();
                }}
                style={{
                    flexDirection: 'row',
                    height: 48,
                    width: 200,
                    backgroundColor: '#fff',
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
                        fontSize: 20,
                        color: '#666',
                        fontFamily: 'Lato-Bold',
                    }}
                >085692355339</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    return selectContactPhone()
                    .then(selection => {
                        if (!selection) {
                            return null;
                        }
                        
                        let { contact, selectedPhone } = selection;
                        addMessage(selectedPhone.number, true);
                        getReply(selectedPhone.number);
                        changeHint();
                        return selectedPhone.number;
                    }); 
                }}
                style={{
                    flexDirection: 'row',
                    height: 48,
                    width: 200,
                    backgroundColor: mainColor,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5,
                    shadowOffset: { height: 2, width: 2 },
                    shadowColor: 'black',
                    shadowOpacity: 0.3,
                }}
            >
                <Icon 
                    name='contacts'
                    type='material-icons'
                    color='#666'
                    containerStyle={{
                        marginRight: 10,
                    }}
                />
                <Text
                    style={{
                        fontSize: 18,
                        color: '#666',
                        fontFamily: 'Lato-Bold',
                    }}
                >Pilih dari kontak</Text>
            </TouchableOpacity>
        </View>
    )
}

const PulsaNumber = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)  

export default PulsaNumber;

