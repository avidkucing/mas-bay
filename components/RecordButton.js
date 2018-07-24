import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';
import Voice from 'react-native-voice';
//our import
import { inputComponents } from '../styles';

class RecordButton extends Component {
    constructor(props) {
        super(props);

        Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
        Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
    }
    
    onSpeechPartialResults(e) {
        this.props.addPartialResult(e.value);
    }

    onSpeechEnd(e) {
        //this._stopRecognizing(e);
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
        this.props.addMessage(this.props.state.inputValue, true);
        this.props.getReply(this.props.state.inputValue);
        this.props.startRecognizing();//ini maksudnya toggle state
        try {
          await Voice.stop();
        } catch (e) {
          console.error(e);
        }
    }

    render() {
        return (
            <View>
                <Icon
                    reverse
                    onPress={() => {
                        if (this.props.state.inputValue==='') {
                            this._startRecognizing();
                        } else if (this.props.state.isRecognizing) {
                            this._stopRecognizing();
                        }
                    }}
                    name={this.props.state.isRecognizing ? 'stop' : 'microphone'}
                    type='font-awesome'
                    color='#fabc3d'
                    reverseColor='#3e3e3f'
                    size={24}
                    containerStyle={inputComponents.iconContainer}
                />
            </View>
            
        );
    }
}

export default RecordButton;