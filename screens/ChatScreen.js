import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
//our import
import { screens } from '../styles';
import CurrentChat from '../containers/CurrentChat';
import InputContainer from '../containers/InputContainer';
import ButtonContainer from '../containers/ButtonContainer';
import { addMessage, getReply } from '../actions';
import LoadingIndicator from '../containers/LoadingIndicator';



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


