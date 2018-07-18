import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';
import Voice from 'react-native-voice';
//our import
import { inputComponents } from '../styles';

class InputPanel extends Component {
    constructor(props) {
        super(props);

        //Voice.onSpeechResults = this.onSpeechResults.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
    }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
    }

    /*onSpeechResults(e) {
        this.props.addResult(e.value);
    }*/
    
    onSpeechPartialResults(e) {
        this.props.addPartialResult(e.value);
    }

    async _startRecognizing(e) {
        this.props.startRecognizing();
        try {
          await Voice.start('id-ID');
        } catch (e) {
          console.error(e);
        }
    }
    
    async _stopRecognizing(e) {
        this.props.startRecognizing();
        this.props.addMessage(this.props.state.inputValue, true);
        this.props.getReply(this.props.state.inputValue);
        try {
          await Voice.stop();
        } catch (e) {
          console.error(e);
        }
    }

    render() {
        return (
            <View 
                flexDirection='row' 
                style={inputComponents.inputPanel}
            >
                <FormInput 
                    ref={input => this.input = input}
                    value={this.props.state.inputValue}
                    onFocus={()=>{
                        this.props.hideHint();
                    }}
                    onChangeText={(text) => {
                        this.props.setInputValue(text);
                    }}
                    onSubmitEditing={() => {
                        this.props.addMessage(this.props.state.inputValue, true);
                        this.props.setInputValue('');
                        this.props.getReply(this.props.state.inputValue);
                    }}
                    onEndEditing={()=>{
                        this.props.showHint();                  
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
                        if (this.props.state.inputValue==='') {
                            this._startRecognizing();
                        } else if (this.props.state.isRecognizing) {
                            this._stopRecognizing();
                        } else {
                            this.props.addMessage(this.props.state.inputValue, true);
                            this.props.setInputValue('');
                            this.props.getReply(this.props.state.inputValue);
                        }
                    }}
                    name={this.props.state.isRecognizing ? 'stop' : this.props.state.inputValue==='' ? 'microphone' : 'send'}
                    type='font-awesome'
                    color='#fabc3d'
                    reverseColor='#3e3e3f'
                    size={20}
                    containerStyle={inputComponents.iconContainer}
                />
            </View>
        );
    }
}

export default InputPanel;