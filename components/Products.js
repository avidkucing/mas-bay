import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity} from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import ProductIcon from './ProductIcon';
  

const Products = ({  }) => {
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
                />
                <ProductIcon
                name='cellphone-wireless'
                type='material-community'
                text='Kuota Internet'

                />
                <ProductIcon
                name='thunder-cloud'
                type='entypo'
                text='Token Listrik'

                />
                <ProductIcon
                name='water'
                type='material-community'
                text='PDAM'

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

                />
                <ProductIcon
                name='google-play'
                type='material-community'
                text='Voucher GPlay'

                />
                <ProductIcon
                name='nature-people'
                type='material-community'
                text='Paket Travel'

                />
                <ProductIcon
                name='airplane-takeoff'
                type='material-community'
                text='Umroh'

                />
            </View>
        </ScrollView>
    )
}

export default Products;

