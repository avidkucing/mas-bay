import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableHighlight, StatusBar } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { AndroidBackHandler } from 'react-navigation-backhandler';
//our import
import { styles, mainColor } from '../styles';
import ChatWindow from '../components/ChatWindow';
import InputPanel from '../components/InputPanel';
import Hint from '../components/Hint';
import Menu from '../components/Menu';
import { addMessage, getReply, changeTab, showHint, hideHint } from '../actions';



const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
  getReply: (text) => dispatch(getReply(text)),  
  changeTab: (number) => dispatch(changeTab(number)),
  showHint: () => dispatch(showHint()),
  hideHint: () => dispatch(hideHint()),
})

class MyComponent extends Component {

  componentDidMount() {
    if(this.props.state.welcome) {
      this.props.addMessage('', false);
      //setTimeout(()=>this.props.navigation.navigate('Home'), 1000);
    }
    this.props.getReply('reset');
  }

  onBackButtonPressAndroid = () => {
    //this.props.navigation.goBack();
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
        <View
          style={{
            height: 48,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            elevation: 1,
            shadowOffset: { height: -2 },
            shadowColor: 'black',
            shadowOpacity: 0.3,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontFamily: 'Lato-Bold',
                fontSize: 30,
                color: '#333',
              }}
            >Mas Bay</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: mainColor,
              borderColor: '#333',
              borderRadius: 9,
              marginRight: 10,
            }}
          >
            <Icon
              name='wallet'
              type='material-community'
              size={20}
              color='#fff'
              underlayColor='transparent'
              containerStyle={{
                marginRight: 5,
                marginLeft: 10,
              }}
              onPress={()=>{
                  
              }}
            />
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                fontSize: 14,
                color: '#fff',
                marginRight: 10,
              }}
            >Rp 0</Text>
          </View>
        </View>
        <ChatWindow />
        {this.props.state.showHint ? 
          <Hint /> 
            : null}
        <TouchableOpacity
          onPress={()=>{
            this.props.state.showHint ? this.props.hideHint() : this.props.showHint();
          }}
        >
          <View
            style={{
              flexDirection:'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: '#aaa',
                marginBottom: 10,
              }}
            >Tampilkan pilihan? </Text>
            <Icon
              name={this.props.state.showHint ? 'checkbox-marked-outline' 
                : 'checkbox-blank-outline'}
              type='material-community'
              size={20}
              color='#aaa'
              underlayColor='transparent'
              containerStyle={{
                marginBottom: 10,                
              }}
              onPress={()=>{
                this.props.state.showHint ? this.props.hideHint() : this.props.showHint();
              }}
            />
          </View>
        </TouchableOpacity>
        <InputPanel onPress={()=>this.props.navigation.goBack()}/>
        {this.props.state.showMenu ? 
          <Menu /> : null}
      </AndroidBackHandler>
      </View> 
  );
  }
}

const Chat = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Chat;


