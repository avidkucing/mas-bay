import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';
import Voice from 'react-native-voice';
import { connect } from 'react-redux';
//our import
import { inputComponents, mainColor } from '../styles';
import { addMessage, getReply, startRecognizing,
    addPartialResult,
    setInputValue, } from '../actions';

const mapStateToProps = state => ({
    state: state,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
    getReply: (text) => dispatch(getReply(text)),
    startRecognizing: () => dispatch(startRecognizing()),
    addPartialResult: (result) => dispatch(addPartialResult(result)),
    setInputValue: (text) => dispatch(setInputValue(text)),
})

class MyButton extends Component {
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
        try {
          await Voice.start('id-ID');
            this.props.startRecognizing();
        } catch (e) {
          console.error(e);
        }
    }
    
    async _stopRecognizing(e) {
        if (this.props.state.inputValue==='') {
            
        } else {
        this.props.addMessage(this.props.state.inputValue, true);
        this.props.getReply(this.props.state.inputValue);
        }
        try {
          await Voice.stop();
            this.props.startRecognizing();//ini maksudnya toggle state
        } catch (e) {
          console.error(e);
        }
    }

    render() {
        return (
            <View>
                <Icon
                    //reverse
                    onPress={() => {
                        if (this.props.state.isRecognizing) {
                            this._stopRecognizing();
                        } else {
                            this.props.setInputValue('');
                            this._startRecognizing();
                        }
                    }}
                    name={this.props.state.isRecognizing ? 'stop' : 'microphone'}
                    type='font-awesome'
                    color='#666'
                    size={24}
                    containerStyle={{
                        marginRight: 20,
                    }}
                />
            </View>
            
        );
    }
}

const RecordButton = connect(
    mapStateToProps, mapDispatchToProps
)(MyButton)

export default RecordButton;