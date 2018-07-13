import React, { Component } from '../../.cache/typescript/2.9/node_modules/@types/react/.cache/typescript/2.9/node_modules/@types/react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Button, Text, FormInput } from 'react-native-elements';
//our import
import Contact from '../Components/Contact';
import ButtonPrimary from '../Components/ButtonPrimary';



export default class RiwayatScreen extends Component {

    render() {

        back = () => {
            this.props.navigation.goBack();
        }

        return(
            <ScrollView contentContainerStyle={{ 
                //flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
                <Text h1 style={{
                    marginTop: 20,
                    marginBottom: 30,
                }}
                >Riwayat</Text>

                <Text style={{
                    margin: 10,
                }}>
                11 JULI 2018
                </Text>

                <Text style={{
                    color: 'pink',
                    marginBottom: 10,
                }}
                >Menunggu Konfirmasi</Text>

                <View style={{
                    width: 360,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: 80,
                    marginBottom: 20,
                }}>
                    <Contact name='Avid' number='085692355339' default={false}/>
                    <Contact name='5.000' number='Rp7.000' default={false} />
                </View>

                <Text style={{
                    color: 'pink',
                    marginBottom: 10,
                }}
                >Sukses</Text>

                <View style={{
                    width: 360,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: 80,
                    marginBottom: 20,
                }}>
                    <Contact name='Avid' number='085692355339' default={false}/>
                    <Contact name='5.000' number='Rp7.000' default={false} />
                </View>

                <Text style={{
                    margin: 10,
                }}>
                10 JULI 2018
                </Text>

                <Text style={{
                    color: 'pink',
                    marginBottom: 10,
                }}
                >Sukses</Text>

                <View style={{
                    width: 360,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: 80,
                    marginBottom: 20,
                }}>
                    <Contact name='Avid' number='085692355339' default={false}/>
                    <Contact name='5.000' number='Rp7.000' default={false} />
                </View>

                <Text style={{
                    color: 'pink',
                    marginBottom: 10,
                }}
                >Sukses</Text>

                <View style={{
                    width: 360,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: 80,
                    marginBottom: 20,
                }}>
                    <Contact name='Avid' number='085692355339' default={false}/>
                    <Contact name='5.000' number='Rp7.000' default={false} />
                </View>

                <Text style={{
                    color: 'pink',
                    marginBottom: 10,
                }}
                >Sukses</Text>

                <View style={{
                    width: 360,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: 80,
                    marginBottom: 20,
                }}>
                    <Contact name='Avid' number='085692355339' default={false}/>
                    <Contact name='5.000' number='Rp7.000' default={false} />
                </View>
            </ScrollView>
        )
    }
}