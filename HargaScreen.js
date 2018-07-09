import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import ButtonPrimary from './ButtonPrimary';
//our import

const operator = {
    0:'XL', 1:'Indosat', 2:'Axis', 3:'Telkomsel',
}

const DaftarView = []

Object.entries(operator).forEach(([key, value]) => {
    DaftarView.push(<TouchableOpacity key={key}><Text 
    h2
    style={{
       margin: 10, 
    }}>{value}</Text></TouchableOpacity>);
})

export default class HargaScreen extends Component {

    render() {

        back = () => {
            this.props.navigation.goBack();
        }

        return(
            <View style={styles.container}>
                <View style={{ 
                    flex: 9,
                    alignItems: 'center',
                    justifyContent: 'center',
                 }}>
                    {DaftarView}
                </View>
                <View style={{ flex: 1 }}>
                    <ButtonPrimary title='KEMBALI' width={120} height={40} onPress={back}/>
                </View>
            </View>
        )
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