import React, { Component } from 'react';
import { View, Platform, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles } from '../styles';
import ChatWindow from '../containers/ChatWindow';
import InputPanel from '../containers/InputPanel';




const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  
})

class MyComponent extends Component {

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


