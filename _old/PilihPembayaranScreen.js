import React, { Component } from '../../.cache/typescript/2.9/node_modules/@types/react/.cache/typescript/2.9/node_modules/@types/react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { Button, Text, FormInput } from 'react-native-elements';
//our import
import Contact from '../Components/Contact';
import ButtonPrimary from '../Components/ButtonPrimary';
import ButtonPembayaran from '../Components/ButttonPembayaran';


export default class PilihPembayaranScreen extends Component {

  moveToKonfirmasi = (tipe) => {
    this.props.navigation.navigate('Konfirmasi', { 
      nama: this.props.navigation.getParam('nama', ''),
      nomor: this.props.navigation.getParam('nomor', ''),
      nominal: this.props.navigation.getParam('nominal', ''),
      tipe: tipe });
  }

  render() {

    back = () => {
      this.props.navigation.goBack();
    }

    return (
      <View style={styles.container}>
        <View style={{ 
          flex: 9,
          justifyContent: 'center',
          alignItems: 'center',
          }}>
          
          <Text h1 
          style={{
            marginBottom: 10,
          }} 
          >Beli Pulsa</Text>
          
          <Text style={{
            margin: 10,
          }}>
          BELI UNTUK
          </Text>
          
          <Contact name={this.props.navigation.getParam('nama', '')} 
          number={this.props.navigation.getParam('nomor', 'Belum ada')}
          default={false}/>
          
          <Text style={{
            marginBottom: 10,
          }}>
          SEHARGA
          </Text>

          <Text h2 
          style={{
            marginBottom: 10,
          }} 
          >{this.props.navigation.getParam('nominal', '')}</Text>
          
          <Text style={{
            margin: 10,
          }}>
          DENGAN
          </Text>

          <View style={{ flexDirection: 'row', marginTop: 10, }}>
          <ButtonPembayaran title='Saldo' subtitle='Rp123.000' width={160} height={60} 
          onPress={()=>this.moveToKonfirmasi('Saldo')}/>
          </View>

          <View style={{ flexDirection: 'row', }}>
          <ButtonPembayaran title='Transfer' subtitle='BNI' width={120} height={60} 
          onPress={()=>this.moveToKonfirmasi('Transfer BNI')}/>
          <ButtonPembayaran title='Transfer' subtitle='BCA' width={120} height={60} 
          onPress={()=>this.moveToKonfirmasi('Transfer BCA')}/>
          </View>

          <View style={{ flexDirection: 'row', }}>
          <ButtonPembayaran title='Transfer' subtitle='Mandiri' width={140} height={60} 
          onPress={()=>this.moveToKonfirmasi('Transfer Mandiri')}/>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <ButtonPrimary title='KEMBALI' width={120} height={40} onPress={back}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
