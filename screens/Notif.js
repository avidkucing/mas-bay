import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles, backgroundColor, mainColor } from '../styles';
import {  } from '../actions';
import TitleBar from '../components/TitleBar';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({

})

class MyComponent extends Component {

    render() {
        return (
            <View style={styles.rootContainer}>
                <View flex={1}>
                    <TitleBar text='Notifikasi' onPress={()=>this.props.navigation.goBack()}/>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text>Belum ada kok, sans.</Text>
                    </View>
                </View>
            </View>
                
        )
    }
}

const Notif = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Notif;


