import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { FormInput, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
//our import
import { screens, inputComponents } from '../styles';
import TitleBar from '../components/TitleBar';
import CurrentChat from '../containers/CurrentChat';
import CurrentHint from '../containers/CurrentHint';
import InputContainer from '../containers/InputContainer';
import ButtonContainer from '../containers/ButtonContainer';

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  
})

class Riwayat extends Component {

    render() {

        back = () => {
            this.props.navigation.goBack();
        }

        return(
            <View style={screens.homeContainer}>
                
            </View>
        )
    }
}

const RiwayatScreen = connect(
  mapStateToProps, mapDispatchToProps
)(Riwayat)

export default RiwayatScreen;


