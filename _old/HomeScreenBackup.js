import React, { Component } from '../../../.cache/typescript/2.9/node_modules/@types/react/../.cache/typescript/2.9/node_modules/@types/react/../.cache/typescript/2.9/node_modules/@types/react/../.cache/typescript/2.9/node_modules/@types/react/../.cache/typescript/2.9/node_modules/@types/react/../.cache/typescript/2.9/node_modules/@types/react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Icon } from 'react-native-elements';
//our import
import Contact from '../Components/Contact';
import ButtonPrimary from '../ButtonPrimary';

const defaultKontak = {
  nama: 'Avid',
  nomor: '085692355339',
  default: true,
}

export default class HomeScreen extends Component {

  render() {

    moveToBeliPulsa = () => {
        this.props.navigation.navigate('BeliPulsa', defaultKontak);
    }

    moveToDaftarHarga = () => {
      this.props.navigation.navigate('DaftarHarga');
    }

    moveToRiwayat = () => {
      this.props.navigation.navigate('Riwayat');
    }

    return (
      <View style={styles.container}>
        <View style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Contact name='Saldo' number='Rp 123.000' />
        <Button
          title='ISI'
          color='white'
          backgroundColor='pink'
          buttonStyle={{
            height: 30,
            width: 75,
            borderRadius: 50,
          }}
        />
        </View>
        <View style={{ 
          flex: 5,
          justifyContent: 'center',
          alignItems: 'center', 
          }}>
          <Text h1 
          style={{
            marginLeft: 50,
            marginRight: 50,
            marginBottom: 10,
            textAlign: 'center',
          }} 
          >Mau beli apa hari ini?</Text>
          <Text style={{
            margin: 10,
            color: 'pink',
          }}
          >Mendengarkan..</Text>
          <Icon
            reverse
            name='microphone'
            type='font-awesome'
            color='pink'
            style={{
              //margin: 10,
            }}
          />
        </View>
        <View style={{ 
          flex: 3,
          alignItems: 'center',
          }} >
          <Button
            onPress={moveToBeliPulsa}
            title='BELI PULSA'
            color='white'
            backgroundColor='pink'
            buttonStyle={{
              height: 40,
              width: 140,
              borderWidth: 2,
              borderRadius: 50,
              borderColor: 'pink',
              marginBottom: 10,
            }}
          />
          <ButtonPrimary 
          title='LIHAT HARGA'
          width={140} 
          height={40} 
          onPress={moveToDaftarHarga} 
          icon='right'
          iconName='chevron-right'
          iconType='entypo'
          />
        </View>
        <View flexDirection='row' style={{ 
          flex: 1,
          width: 300,
          justifyContent: 'space-evenly',
        }}>
          <ButtonPrimary title='RIWAYAT' height={40} width={120} onPress={moveToRiwayat} />
          <ButtonPrimary title='PROFIL' height={40} width={120} onPress={()=>console.log('')} />
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

