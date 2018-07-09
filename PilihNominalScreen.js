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
import ButtonNominal from './ButtonNominal';


export default class PilihNominalScreen extends Component {

  moveToPilihPembayaran = (nominal) => {
    this.props.navigation.navigate('PilihPembayaran', { 
      nama: this.props.navigation.getParam('nama', ''),
      nomor: this.props.navigation.getParam('nomor', ''),
      nominal: nominal, });
  }
  
  render() {
    let nama = this.props.navigation.getParam('nama', '');
    let nomor = this.props.navigation.getParam('nomor', '');

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
          default={false}/>

          <View style={{ flexDirection: 'row', marginTop: 20, }}>
          <ButtonNominal title='5.000' subtitle='Rp7.000' width={140} height={60} 
          onPress={()=>this.moveToPilihPembayaran('5.000')}/>
          <ButtonNominal title='10.000' subtitle='Rp11.000' width={140} height={60} 
          onPress={()=>this.moveToPilihPembayaran('10.000')}/>
          </View>
          
          <View style={{ flexDirection: 'row', }}>
          <ButtonNominal title='20.000' subtitle='Rp21.500' width={140} height={60} 
          onPress={()=>this.moveToPilihPembayaran('20.000')}/>
          <ButtonNominal title='25.000' subtitle='Rp24.500' width={140} height={60} 
          onPress={()=>this.moveToPilihPembayaran('25.000')}/>
          </View>
          
          <View style={{ flexDirection: 'row', }}>
          <ButtonNominal title='50.000' subtitle='Rp48.000' width={140} height={60} 
          onPress={()=>this.moveToPilihPembayaran('50.000')}/>
          <ButtonNominal title='100.000' subtitle='Rp95.000' width={140} height={60} 
          onPress={()=>this.moveToPilihPembayaran('100.000')}/>
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
