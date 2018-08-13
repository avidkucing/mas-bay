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
                source={require('../assets/news1.jpeg')}
                style={{
                    flex: 1
                }}
            >
            <View style={{
                flex: 1,
                //justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: mainColor+'cc',
            }}>
                <ScrollView
                    ref={page => this.page = page}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    contentContainerStyle={{
                        width: 360,
                    }}
                >
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
                <View 
                    style={{
                        alignItems: 'center',
                        height: 300,
                    }}
                >
                    {this.state.isLogin ? null : (<IconedInput
                        name='person'
                        placeholder='Nama'
                    />)}
                    <IconedInput
                        name='email'
                        placeholder='Email'
                    />
                    <IconedInput
                        name='vpn-key'
                        placeholder='Password'
                    />
                    <Button
                        title={this.state.isLogin ? 'Login' : 'Daftar'}
                        buttonStyle={{
                            height: 48,
                            width: 80,
                            backgroundColor: 'transparent',
                            borderWidth: 5,
                            borderColor: '#fff',
                            borderRadius: 5,
                            padding:0,
                            marginTop: 20,
                        }}
                        textStyle={{
                            color: '#fff',
                            fontFamily: 'Lato-Bold',
                        }}
                        onPress={this.state.isLogin ? ()=>{
                            this.props.navigation.navigate('Home');
                        } : ()=>{
                            this.page.scrollToEnd();
                        }}
                    />
                </View>
                <View 
                    style={{
                        height: Platform.OS==='ios' ? 100 : 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View
                        flexDirection='row'
                        style={{
                            alignItems: 'baseline',
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontFamily: 'Lato-Bold',

                            }}
                        >
                            {(this.state.isLogin ? 'Belum' : 'Sudah')+' punya akun? '}
                        </Text>
                        <TouchableOpacity
                            onPress={()=>{
                                //this.props.navigation.navigate('Login');
                                this.setState((prevState)=>{return {isLogin: !prevState.isLogin}});
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontFamily: 'Lato-Bold',
                                    textDecorationLine: 'underline',
                                }}
                            >
                                {this.state.isLogin ? 'Daftar' : 'Login.'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        height: Platform.OS==='ios' ? 720 : 640,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            fontFamily: 'Lato-Bold',
                            color: '#fff',
                            width: 200,
                            textAlign: 'center',
                            marginTop: Platform.OS==='ios' ? 200 : 150,
                        }}
                    >Silahkan masukan kode verifikasi yang udah dikirim ke email kamu.</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            ToastAndroid.show('Email konfirmasi telah dikirim ulang.', ToastAndroid.LONG);
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                marginTop: 5,
                                marginBottom: 60,
                                fontFamily: 'Lato-Bold',
                                textDecorationLine: 'underline',
                            }}
                        >
                            {' Kirim Ulang.'}
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 48,
                            color: '#fff',
                            //fontFamily: 'Lato-Bold',
                            marginBottom: 40,
                        }}
                    >_ _ _ _ _ _</Text>
                    <Button
                        title='Next'
                        buttonStyle={{
                            height: 48,
                            width: 80,
                            backgroundColor: 'transparent',
                            borderWidth: 5,
                            borderColor: '#fff',
                            borderRadius: 5,
                            padding:0,
                            //marginTop: 20,
                        }}
                        textStyle={{
                            color: '#fff',
                            fontFamily: 'Lato-Bold',
                        }}
                        onPress={()=>{
                            this.props.navigation.navigate('Home');
                        }}
                    />
                    <View
                        style={{
                            marginTop: 80,
                            height: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Icon
                            name='keyboard-arrow-up'
                            type='material-icons'
                            color='#fff'
                        />
                        <TouchableOpacity
                            onPress={()=>{
                                this.page.scrollTo({ x : 0});
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontFamily: 'Lato-Bold',
                                }}
                            >
                                {'Kembali'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </View>  
            </ImageBackground>
        )
    }
}

const Daftar = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Daftar;


