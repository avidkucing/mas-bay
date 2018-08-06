import React, { Component } from 'react';
import { View, Platform, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles } from '../styles';
import ChatWindow from '../containers/ChatWindow';
import { addMessage, getReply } from '../actions';
import InputPanel from '../containers/InputPanel';




const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
  getReply: (text) => dispatch(getReply(text)),  
})

class MyComponent extends Component {

  componentDidMount() {
    if(this.props.state.welcome) {
      this.props.addMessage('Hai! Aku Mas Bay. Aku bisa beliin kamu macem-macem lho. Bisa pulsa, kuota internet, token listrik, dll.', false);
      this.props.getReply('reset');
    }
  }

  render() {

    return (
      <View style={styles.rootContainer}>
        <ChatWindow />
        <InputPanel onPress={()=>this.props.navigation.goBack()}/>
      </View>
    );
  }
}

const Chat = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Chat;


