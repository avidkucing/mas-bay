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

const MyComponent = ({ onPress }) => {
    return (
        <ScrollView
            >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                }}
            >
                <ProductIcon
                name='perm-phone-msg'
                type='material-icons'
                text='Pulsa'
                onPress={onPress}
                />
                <ProductIcon
                name='cellphone-wireless'
                type='material-community'
                text='Kuota Internet'
                onPress={onPress}

                />
                <ProductIcon
                name='thunder-cloud'
                type='entypo'
                text='Token Listrik'
                onPress={onPress}

                />
                <ProductIcon
                name='water'
                type='material-community'
                text='PDAM'
                onPress={onPress}

                />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                }}
            >
                <ProductIcon
                name='cart-plus'
                type='material-community'
                text='BPJS'
                onPress={onPress}

                />
                <ProductIcon
                name='google-play'
                type='material-community'
                text='Voucher GPlay'
                onPress={onPress}

                />
                <ProductIcon
                name='nature-people'
                type='material-community'
                text='Paket Travel'
                onPress={onPress}

                />
                <ProductIcon
                name='airplane-takeoff'
                type='material-community'
                text='Umroh'
                onPress={onPress}

                />
            </View>
        </ScrollView>
    )
}

const Products = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)  

export default Products;

