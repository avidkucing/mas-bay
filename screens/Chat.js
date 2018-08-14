import React, { Component } from 'react';
import { View, Platform, ScrollView, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { AndroidBackHandler } from 'react-navigation-backhandler';
//our import
import { styles } from '../styles';
import ChatWindow from '../components/ChatWindow';
import InputPanel from '../components/InputPanel';
import ProductIcon from '../components/ProductIcon';
import Hint from '../components/Hint';
import { addMessage, getReply, changeTab } from '../actions';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
  getReply: (text) => dispatch(getReply(text)),  
  changeTab: (number) => dispatch(changeTab(number)),  
})

class MyComponent extends Component {

  componentDidMount() {
    if(this.props.state.welcome) {
      this.props.addMessage('Hai! Aku Mas Bay. Aku bisa beliin kamu macem-macem lho. Bisa pulsa, kuota internet, token listrik, dll.', false);
    }
    this.props.getReply('reset');
  }

  onBackButtonPressAndroid = () => {
    this.props.navigation.goBack();
    return true;
  };

  render() {

    return (
      <View style={styles.rootContainer}>
      <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
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
        </AndroidBackHandler>
      </View>
    );
  }
}

const Chat = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Chat;


