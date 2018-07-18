import React from 'react';
import { View } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';
//our import
import { inputComponents } from '../styles';

const InputPanel = ({ state, addMessage, showHint, hideHint, setInputValue, getReply }) => {
        return (
            <View 
                flexDirection='row' 
                style={inputComponents.inputPanel}
            >
                <FormInput 
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
                    containerStyle={inputComponents.formContainer}
                    inputStyle={inputComponents.formInput} 
                />
                <Icon
                    reverse
                    onPress={() => {
                        if (state.inputValue!=='') {
                            addMessage(state.inputValue, true);
                            setInputValue('');
                            getReply(state.inputValue);
                        }
                    }}
                    name='send'
                    type='font-awesome'
                    color='#fabc3d'
                    reverseColor='#3e3e3f'
                    size={20}
                    containerStyle={inputComponents.iconContainer}
                />
            </View>
        );
    }

export default InputPanel;