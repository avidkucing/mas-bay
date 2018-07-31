import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles } from '../styles/chat';
import ChatWindow from '../containers/ChatWindow';
import { addMessage, getReply } from '../actions';
import InputPanel from '../containers/InputPanel';
import HintPanel from '../containers/HintPanel';
import TitleBar from '../components/TitleBar';




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
      <View style={styles.rootContainer}>
        <TitleBar text='Chat' />
        <ChatWindow />
        <HintPanel />
        <InputPanel />
      </View>
    );
  }
}

const ChatScreen = connect(
  mapStateToProps, mapDispatchToProps
)(Chat)

export default ChatScreen;


