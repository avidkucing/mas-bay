import React from 'react';
import { View } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';

const InputPanel = ({ state, addMessage, showHint, hideHint, setInputValue, getReply }) => {
        return (
            <View 
                flexDirection='row' 
                style={{ 
                    height: 60,
                    flexDirection: 'row',
                    width: 360,
                    alignItems: 'center',
                    backgroundColor: '#fddea0',
                }}
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
                    containerStyle={{
                        width: 280,
                        height: 40,
                        borderRadius: 50,
                        justifyContent: 'center',
                        marginRight: 3,
                        elevation: 1,
                        backgroundColor: 'white',
                    }}
                    inputStyle={{
                        margin: 10,
                        width: 240,
                    }} 
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
                    containerStyle={{
                        elevation: 1,
                        marginBottom: 10,
                    }}
                />
            </View>
        );
    }

export default InputPanel;