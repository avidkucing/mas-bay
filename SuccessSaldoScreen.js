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


export default class SuccessSaldoScreen extends Component {

  render() {
    moveToHome = () => {
      this.props.navigation.navigate('Home');
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
          >Sukses!</Text>
          
          <Text style={{
            margin: 10,
            textAlign: 'center',
          }}>
          PULSA KAMU AKAN SEGERA DIKIRIM</Text>
        </View>

        <View style={{ 
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          }}>
          <Text style={{
                color: 'pink',
                marginBottom: 10,
            }}>Transaksi tersimpan dalam riwayat</Text>
          <ButtonPrimary title='OK' width={120} height={40} onPress={moveToHome}/>
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
