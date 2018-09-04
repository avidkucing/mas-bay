import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity} from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { mainColor } from '../styles';
import { addMessage, getReply, changeHint } from '../actions';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),      
    getReply: (text) => dispatch(getReply(text)),      
    changeHint: (number) => dispatch(changeHint(number)),
})

const MyComponent = ({ name, type, size, color, text, addMessage, getReply, changeHint }) => {

    return (
      <View
        style={{
          flex: 1,
          marginTop: 5,
          marginBottom: 5,
        }}
      >
      <TouchableOpacity
        onPress={()=>{
            addMessage(text, true);
            getReply(text);
            if (text==='Pulsa') changeHint();
        }}
        flex={1}
      >
        <Icon
          name={name}
          type={type}
          size={size || 30}
          color={color || mainColor}
          iconStyle={{
            
          }}
          containerStyle={{
  
          }}
          
          />
        <Text
          style={{
            fontFamily: 'Lato-Regular',
            fontSize: 14,
            color: '#333',
            marginTop: 10,
            textAlign: 'center',
            textAlignVertical: 'top',
          }}
        >{text}</Text>
      </TouchableOpacity>
      </View>
    );
  }

const ProductIcon = connect(
    mapStateToProps, mapDispatchToProps
)(MyComponent)  
  

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

