import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
//our import
import HomeScreen from './HomeScreen';
import BeliPulsaScreen from './BeliPulsaScreen';
import HargaScreen from './HargaScreen';
import ContactScreen from './ContactScreen';
import PilihNominalScreen from './PilihNominalScreen';
import PilihPembayaranScreen from './PilihPembayaranScreen';
import KonfirmasiScreen from './KonfirmasiScreen';
import SuccessScreen from './SuccessSreen';
import RiwayatScreen from './RiwayatScreen';
import SuccessSaldoScreen from './SuccessSaldoScreen';


const RootStack = createStackNavigator(
  {
    Home: { 
      screen: HomeScreen, 
    },
    BeliPulsa: {
      screen: BeliPulsaScreen,
    },
    DaftarHarga: {
      screen: HargaScreen,
    },
    DaftarKontak: {
      screen: ContactScreen,
    },
    PilihNominal: {
      screen: PilihNominalScreen,
    },
    PilihPembayaran: {
      screen: PilihPembayaranScreen,
    },
    Konfirmasi: {
      screen: KonfirmasiScreen,
    },
    Success: {
      screen: SuccessScreen,
    },
    SuccessSaldo: {
      screen: SuccessSaldoScreen,
    },
    Riwayat: {
      screen: RiwayatScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    navigationOptions: () => ({
    
    }),
  }
);

export default class App extends Component {

  render() {
    return (
      <RootStack />
    );
  }
}
