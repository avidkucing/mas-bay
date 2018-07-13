import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { Button, Text, FormInput } from 'react-native-elements';
//our import
import Contact from './Contact';
import ButtonPrimary from '../Components/ButtonPrimary';


export default class BeliPulsaScreen extends Component {

  render() {
    let nama = this.props.navigation.getParam('nama', '');
    let nomor = this.props.navigation.getParam('nomor', 'Belum ada');

    moveToDaftarKontak = () => {
      this.props.navigation.navigate('DaftarKontak');
    }

    moveToPilihNominal = () => {
      this.props.navigation.navigate('PilihNominal', {
        nama: nama,
        nomor: nomor,
        default: false,
      });
    }

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
          <Contact name={nama} 
          number={nomor}
          default={this.props.navigation.getParam('default', true)}
          onPress={moveToDaftarKontak}/>
          <FormInput 
            editable={false}
            placeholder='Atau ketik disini...'
            keyboardType='phone-pad'
            underlineColorAndroid='pink'
            containerStyle={{
              width: 200,
            }} />
          <Button
            title='PILIH DARI KONTAK'
            onPress={moveToDaftarKontak}
            icon={{
              name: 'user-plus',
              type: 'feather',
            }}
            color='white'
            backgroundColor='pink'
            buttonStyle={{
              height: 40,
              margin: 10,
              width: 200,
              borderRadius: 50,
            }}
          />
          <Button
            onPress={moveToPilihNominal}
            title='OK'
            color='pink'
            backgroundColor='white'
            buttonStyle={{
              height: 40,
              width: 100,
              borderWidth: 2,
              borderRadius: 50,
              borderColor: 'pink',
            }}
          />
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
