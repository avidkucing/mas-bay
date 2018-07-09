import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Button, Text, FormInput } from 'react-native-elements';
//our import
import Contact from './Contact';
import ButtonPrimary from './ButtonPrimary';


export default class ContactScreen extends Component {

    //TODO: ini kenapa harus diluar?
    gantiKontak = ( name, number) => {
        this.props.navigation.navigate('BeliPulsa', {
            nama: name,
            nomor: number,
            default: false,
        });
    }

    render() {
        return(
            <View style={{
                
            }}>
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
                    >Kontak</Text>
                    <Text style={{
                        color: 'pink',
                        marginBottom: 10,
                    }}
                    >Sering dipakai</Text>
                    <Contact name='Natasha' number='085555555555' 
                    onPress={()=>this.gantiKontak('Natasha','085555555555')}/>
                    <Contact name='Riska' number='085555555555' 
                    onPress={()=>this.gantiKontak('Riska','085555555555')}/>
                    <Contact name='Irna' number='085555555555' 
                    onPress={()=>this.gantiKontak('Irna','085555555555')}/>
                    <Text style={{
                        color: 'pink',
                        marginBottom: 20,
                    }}
                    >Lainnya</Text>
                    <Contact name='Lisna' number='085555555555' 
                    onPress={()=>this.gantiKontak('Lisna','085555555555')}/>
                    <Contact name='Latifah' number='085555555555' 
                    onPress={()=>this.gantiKontak('Latifah','085555555555')}/>
                    <Contact name='Reni' number='085555555555' 
                    onPress={()=>this.gantiKontak('Reni','085555555555')}/>
                    <Contact name='Octavia' number='085555555555' 
                    onPress={()=>this.gantiKontak('Octavia','085555555555')}/>
                    <Contact name='Ifti' number='085555555555' 
                    onPress={()=>this.gantiKontak('Ifti','085555555555')}/>
                </ScrollView>
            </View>
        )
    }
}