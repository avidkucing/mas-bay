import React, { Component } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { inputComponents } from '../styles/chat';
import RecordButton from './RecordButton';

import { addMessage, showHint, hideHint, 
    setInputValue, getReply, toggleTitle } from '../actions';

const mapStateToProps = state => ({
    state: state,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
    showHint: () => dispatch(showHint()),
    hideHint: () => dispatch(hideHint()),
    setInputValue: (text) => dispatch(setInputValue(text)),
    getReply: (text) => dispatch(getReply(text)),
    toggleTitle: () => dispatch(toggleTitle()),
})

const MyInput = ({ state, showHint, hideHint, setInputValue, addMessage, getReply }) => {
    const renderSendButton = ()=> {if (!state.isRecognizing) return (<Icon
        name='send'
        type='material-icons'
        size={24}
        color='#aaa'
        containerStyle={{
            marginRight: 20,
        }}
        onPress={() => {
            Keyboard.dismiss();
            if (state.inputValue!=='') {
                addMessage(state.inputValue, true);
                setInputValue('');
                getReply(state.inputValue);
            }                    
        }}
    />)}

    const sendButton = renderSendButton();

    return (
        <View
            flexDirection='row'
            height={56}
        >
        <View
            flex= {1}
            alignItems= 'center'
            flexDirection='row'
            elevation={5}
            backgroundColor='#fff'
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
                    showHint();
                }}
                placeholder='Ketik disini...'
                underlineColorAndroid='transparent'
                returnKeyLabel='send'
                style={{
                    marginLeft: 10,
                }}
            />
            {sendButton}
            <RecordButton />
        </View>
        </View>
    );
}

const InputPanel = connect(
    mapStateToProps, mapDispatchToProps
)(MyInput)

export default InputPanel;