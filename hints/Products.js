import React, { Component } from 'react';
import { View, ScrollView, Platform, } from 'react-native';
import { connect } from 'react-redux';
//our import
import { mainColor } from '../styles';
import { addMessage, getReply } from '../actions';
import ProductIcon from '../components/ProductIcon';

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
    
})

const MyComponent = () => {
    return (
        <View 
            style={{
                height: 200,
            }}
        >
        <ScrollView
            contentcomponentstyle={{
                backgroundColor: '#fff',
                width: Platform.OS==='ios' ? 370 : 360,
                borderRadius: 25,
            }}
            >
            <View
                flexDirection='row'
                justifyContent='flex-start'
            >
                <ProductIcon
                name='perm-phone-msg'
                type='material-icons'
                text='Pulsa'
                //onPress={}
                />
                <ProductIcon
                name='cellphone-wireless'
                type='material-community'
                text='Kuota Internet'
                //onPress={}

                />
                <ProductIcon
                name='thunder-cloud'
                type='entypo'
                text='Token Listrik'
                //onPress={}

                />
                <ProductIcon
                name='water'
                type='material-community'
                text='PDAM'
                //onPress={}

                />
            </View>
            <View
                flexDirection='row'
                justifyContent='flex-start'
            >
                <ProductIcon
                name='cart-plus'
                type='material-community'
                text='BPJS'
                //onPress={}

                />
                <ProductIcon
                name='google-play'
                type='material-community'
                text='Voucer GPlay'
                //onPress={}

                />
                <ProductIcon
                name='nature-people'
                type='material-community'
                text='Paket Travel'
                //onPress={}

                />
                <ProductIcon
                name='airplane-takeoff'
                type='material-community'
                text='Umroh'
                //onPress={}

                />
            </View>
            <View
                flexDirection='row'
                justifyContent='flex-start'
            >
                <ProductIcon
                name='plus-circle'
                type='material-community'
                text='Coming Soon'
                //onPress={}

                />
            </View>
        </ScrollView>
        </View>
    )
}

const Products = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)  

export default Products;

