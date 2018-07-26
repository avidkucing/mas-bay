import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
//our import
import { screens } from '../styles';
import TitleBar from '../components/TitleBar';
import CurrentChat from '../containers/CurrentChat';
import CurrentHint from '../containers/CurrentHint';
import InputContainer from '../containers/InputContainer';
import ButtonContainer from '../containers/ButtonContainer';
import { addMessage, getReply } from '../actions';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
  getReply: (text) => dispatch(getReply(text)),  
})

class Chat extends Component {

  componentDidMount() {
    //this.props.addMessage('Hai '+this.props.state.name+'!', false);
    this.props.getReply('reset');
  }


  render() {

    return (
      <View style={screens.homeContainer}>
        <CurrentChat />
        <View style={screens.inputContainer}>
          <InputContainer />
          <ButtonContainer />
        </View>
      </View>
    );
  }
}

const ChatScreen = connect(
  mapStateToProps, mapDispatchToProps
)(Chat)

export default ChatScreen;


