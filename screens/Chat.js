import React, { Component } from 'react';
import { View, Platform, ScrollView, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles } from '../styles';
import ChatWindow from '../components/ChatWindow';
import InputPanel from '../components/InputPanel';
import ProductIcon from '../components/ProductIcon';
import Hint from '../components/Hint';
import { addMessage, getReply } from '../actions';


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
    }
    this.props.getReply('reset');
  }

  render() {

    return (
      <View style={styles.rootContainer}>
      <StatusBar
        backgroundColor='#fff'
        barStyle='dark-content'
      />
        <ChatWindow />
        <View
          style={{
            //height: 200,
          }}
        >
        {this.props.state.showHint ? <Hint /> : null}
          </View>
        <InputPanel onPress={()=>this.props.navigation.goBack()}/>
      </View>
    );
  }
}

const Chat = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Chat;


