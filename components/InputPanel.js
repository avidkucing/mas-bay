import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';
import Voice from 'react-native-voice';
//our import
import { inputComponents } from '../styles';

const InputPanel = ({ state, showHint, hideHint, setInputValue, addMessage, getReply, toggleTitle }) => {
    return (
        <View>
            <FormInput 
                ref={input => this.input = input}
                value={state.inputValue}
                onFocus={()=>{
                    hideHint();
                    if (state.isTitleShown) toggleTitle();
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
                containerStyle={inputComponents.formContainer}
                inputStyle={inputComponents.formInput} 
            />
        </View>
    );
}

export default InputPanel;