import React, { Component } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { inputComponents, mainColor } from '../styles';
import RecordButton from './RecordButton';

import { addMessage, showHint, hideHint, 
    setInputValue, getReply, toggleTitle, showMenu, hideMenu } from '../actions';

const mapStateToProps = state => ({
    state: state,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
    showHint: () => dispatch(showHint()),
    hideHint: () => dispatch(hideHint()),
    showMenu: () => dispatch(showMenu()),
    hideMenu: () => dispatch(hideMenu()),
    setInputValue: (text) => dispatch(setInputValue(text)),
    getReply: (text) => dispatch(getReply(text)),
    toggleTitle: () => dispatch(toggleTitle()),
})

const MyInput = ({ onPress, state, showHint, hideHint, 
    setInputValue, addMessage, getReply, showMenu, hideMenu }) => {

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
                height: 64,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#eee',
            }}
        >
            <View
                style={{
                    flex: 1,
                }}
            >
                <Icon
                    name={state.showMenu ? 'close-circle' : 'menu'}
                    type={state.showMenu ? 'material-community' : 'entypo'}
                    size={36}
                    color='#666'
                    containerStyle={{
                        
                    }}
                    onPress={() => {
                        state.showMenu ? hideMenu() : showMenu(); 
                    }}
                />
            </View>
            <View
                style={{
                    flex: 4,
                    backgroundColor: '#eee',
                    height: 48,
                    borderRadius: 15,
                }}
            >
                <TextInput
                    flex={1}
                    ref={input => this.input = input}
                    value={state.inputValue}
                    onFocus={()=>{
                        hideHint();
                    }}
                    onChangeText={(text) => {
                        setInputValue(text);
                    }}
                    onSubmitEditing={() => {
                        addMessage(state.inputValue, true);
                        setInputValue('');
                        getReply(state.inputValue);
                    }}
                    onEndEditing={()=>{
                        //setTimeout(()=>showHint(), 1000);
                    }}
                    placeholder={state.isRecognizing ? 'Mendengarkan...' : 'Ketik disini...'}
                    placeholderTextColor='#666'
                    paddingLeft={10}
                    underlineColorAndroid='transparent'
                    returnKeyLabel='send'
                    style={{
                        
                    }}
                />
            </View>
            <View
                style={{
                    flex: 1,
                }}
            >
                <Icon
                    name='send'
                    type='material-icons'
                    size={28}
                    color='#666'
                    containerStyle={{
                        
                    }}
                    onPress={() => {
                        Keyboard.dismiss();
                        if (state.inputValue!=='') {
                            addMessage(state.inputValue, true);
                            setInputValue('');
                            getReply(state.inputValue);
                        }                    
                    }}
                />
            </View>
        </View>
    );
}

const InputPanel = connect(
    mapStateToProps, mapDispatchToProps
)(MyInput)

export default InputPanel;