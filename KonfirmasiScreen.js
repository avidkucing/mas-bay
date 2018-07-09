import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { Button, Text, FormInput } from 'react-native-elements';
//our import
import Contact from './Contact';
import ButtonPrimary from './ButtonPrimary';
import ButtonPembayaran from './ButttonPembayaran';


export default class KonfirmasiScreen extends Component {

  moveToSuccess = (waktu) => {
    this.props.navigation.navigate('Success', { 
      tipe: this.props.navigation.getParam('tipe', ''),
      waktu: waktu });
  }

  moveToSuccessSaldo = (waktu) => {
    this.props.navigation.navigate('SuccessSaldo', { 
      tipe: this.props.navigation.getParam('tipe', ''),
      waktu: waktu });
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
            margin: 10,
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

          <Text h2 
          style={{
            marginBottom: 10,
          }} 
          >{this.props.navigation.getParam('tipe', '')}</Text>
        </View>

        <View style={{ 
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          }}>
          <Button
            onPress={
              () => {
                if (this.props.navigation.getParam('tipe', '')!=='Saldo')
              this.moveToSuccess('12 Juli 2018, 15.32 WIB')
              this.moveToSuccessSaldo('12 Juli 2018, 15.32 WIB')
              }}
            title='OK'
            color='white'
            backgroundColor='pink'
            buttonStyle={{
              height: 40,
              width: 120,
              borderWidth: 2,
              borderRadius: 50,
              borderColor: 'pink',
              marginBottom: 5,
            }}
          />
          <Text style={{
                color: 'pink',
                marginBottom: 20,
            }}>Keputusan ini final</Text>
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
