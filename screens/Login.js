import React, { Component } from 'react';
import { View, TouchableOpacity, ToastAndroid, Platform, Image } from 'react-native';
import { Text, Button, FormInput } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles, backgroundColor, mainColor } from '../styles';
import {  } from '../actions';
import IconedInput from '../components/IconedInput';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({

})

class MyComponent extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                //justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: mainColor,
            }}>
                <View
                    style={{
                        height: Platform.OS==='ios' ? 200 : 200,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 48,
                            fontWeight: 'bold',
                            color: '#fff',
                        }}
                    >Mas Bay</Text>
                </View>
                <View 
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <IconedInput
                        name='email'
                        placeholder='Email'
                    />
                    <IconedInput
                        name='vpn-key'
                        placeholder='Password'
                    />
                    <Button
                        title='Login'
                        buttonStyle={{
                            height: 48,
                            width: 80,
                            backgroundColor: mainColor,
                            borderWidth: 5,
                            borderColor: '#fff',
                            borderRadius: 5,
                            padding:0,
                            marginTop: 20,
                        }}
                        textStyle={{
                            color: '#fff',
                            fontWeight: 'bold',
                        }}
                        onPress={()=>{
                            this.props.navigation.navigate('Home');
                        }}
                    />
                    <View 
                        style={{
                            height: Platform.OS==='ios' ? 200 : 150,
                        }}
                    >

                    </View>
                    <View
                        flexDirection='row'
                        style={{
                            
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                            }}
                        >
                            Belum punya akun?
                        </Text>
                        <TouchableOpacity
                            onPress={()=>{
                                this.props.navigation.navigate('Daftar');
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                }}
                            >
                                {' Daftar.'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>  
        )
    }
}

const Notif = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Notif;


