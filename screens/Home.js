import React, { Component } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import {  } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles } from '../styles';
import BottomTab from '../components/BottomTab';
import News from '../components/News';
import Profil from './Profil';
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
      //this.props.addMessage('Hai! Aku Mas Bay. Aku bisa beliin kamu macem-macem lho. Bisa pulsa, kuota internet, token listrik, dll.', false);
      //this.props.getReply('reset');
    }
  }

  render() {

    return (
      <View style={styles.rootContainer}>
          <View
            style={{
              marginTop: Platform.OS==='ios' ? 20 : 10,
            }}
          >
            <News 
              onPressNews={()=>this.props.navigation.navigate('News')} 
            />
          </View>
      </View>
    );
  }
}

const Home = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Home;