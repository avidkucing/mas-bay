import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView, Platform, ToastAndroid, ImageBackground, Image } from 'react-native';
import { Text, Button, FormInput, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles, backgroundColor, mainColor, tintColor } from '../styles';
import {  } from '../actions';
import IconedInput from '../components/IconedInput';



const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({

})

class MyComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: true,
        }
    }

    render() {

        return (
            <ImageBackground
                resizeMode='cover'
                //source={require('../assets/news1.jpeg')}
                style={{
                    flex: 1
                }}
            >
            <View style={{
                flex: 1,
                //justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: mainColor,//+'cc',
            }}>
                <View
                    style={{
                        height: Platform.OS==='ios' ? 250 : 225,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={require('../assets/logo01.png')}
                        style={{
                            height: 100,
                            width: 100,
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 48,
                            color: '#fff',
                            fontFamily: 'Lato-Bold',
                        }}
                    >Mas Bay</Text>
                </View>
            </View>  
            </ImageBackground>
        )
    }
}

const Daftar = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Daftar;


