import React, { Component } from 'react';
import { View, ScrollView, Platform, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
//our import
import { mainColor } from '../styles';
import { addMessage, getReply } from '../actions';
import Products from '../hints/Products';
import PulsaNumber from '../hints/PulsaNumber';
import PulsaNominal from '../hints/PulsaNominal';
import Pembayaran from '../hints/Pembayaran';
import Konfirmasi from '../hints/Konfirmasi';

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),      
  getReply: (text) => dispatch(getReply(text)),      
})

class MyComponent extends Component {

    render() {

  return (
    <Animatable.View
        animation='slideInUp'
        style={{
            //height: 200,
        }}
    >
        {this.props.state.hint===0 ? <Products /> : 
        this.props.state.hint===1 ? <PulsaNumber /> :
        this.props.state.hint===2 ? <PulsaNominal /> :
        this.props.state.hint===3 ? <Pembayaran /> :
        this.props.state.hint===4 ? <Konfirmasi /> :
        null}
    </Animatable.View>
  );
}}

const Hint = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)  

export default Hint;

