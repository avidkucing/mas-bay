import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles, backgroundColor, mainColor } from '../styles';
import { getRiwayat } from '../actions';
import TitleBar from '../components/TitleBar';
import RiwayatItem from '../components/RiwayatItem';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  getRiwayat: (text) => dispatch(getRiwayat(text)),
})

class MyComponent extends Component {

    _keyExtractor = (item) => item._id;

    componentDidMount() {
        //this.props.getRiwayat('');        
    }

    render() {
        let i = 0;

        const riwayat = require('../dummy_database/riwayat.json');

        return (
            <View style={styles.rootContainer}>
                <TitleBar text='Riwayat Pembelian' onPress={()=>this.props.navigation.goBack()}/>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        keyExtractor={this._keyExtractor}
                        data={riwayat}
                        overScrollMode='never'
                        renderItem={({item}) => 
                            <RiwayatItem
                                key={item.id}
                                item={item}
                            /> 
                        }
                    />
                </View>
                
        )
    }
}

const Riwayat = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Riwayat;


