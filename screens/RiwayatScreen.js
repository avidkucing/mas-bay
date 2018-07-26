import React, { Component } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { FormInput, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
//our import
import { screens, inputComponents } from '../styles';
import TitleBar from '../components/TitleBar';
import CurrentChat from '../containers/CurrentChat';
import CurrentHint from '../containers/CurrentHint';
import InputContainer from '../containers/InputContainer';
import Message from '../components/Message';
import ButtonContainer from '../containers/ButtonContainer';
import { setEmailValue, setPasswordValue, login, logout, getSaldo, setSession, setName, getRiwayat } from '../actions';
import TextPrimary from '../components/TextPrimary';

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  getRiwayat: (text) => dispatch(getRiwayat(text)),
})




class Riwayat extends Component {

    _keyExtractor = (item) => item._id;

    componentDidMount() {
        this.props.getRiwayat('');        
    }

    render() {

        const riwayat = this.props.state.riwayat;

        return (
            <View style={screens.homeContainer}>
                <FlatList
                keyExtractor={this._keyExtractor}
                data={riwayat}
                overScrollMode='never'
                renderItem={({item}) => 
                    <View
                        key={item._id}
                        alignItems='center'
                        marginTop={20}
                        marginBottom={30}                        
                    >
                        <TextPrimary
                            text={item.fullDate}
                        />
                        <TextPrimary
                            text={item.status.substr(0,7)}
                            type='bold'
                            mb={10}
                        />
                        <View
                            flexDirection='row'
                        >
                        
                            <View
                                alignItems='center'
                                marginRight={50}
                            >
                                <TextPrimary
                                    text={'Pulsa '+item.denom}
                                    type='bold'
                                    size={20}
                                />
                                <TextPrimary
                                    text={item.phone}
                                />
                            </View>
                            <View
                                alignItems='center'
                            >
                                <TextPrimary
                                    text={'Seharga '+item.price}
                                    type='bold'
                                    size={20}
                                />
                                <TextPrimary
                                    text={item.channel.charAt(0).toUpperCase()+item.channel.slice(1)}
                                />
                            </View>
                        </View>
                    </View>
                }
            />
            </View>
        )
    }
}

const RiwayatScreen = connect(
  mapStateToProps, mapDispatchToProps
)(Riwayat)

export default RiwayatScreen;


