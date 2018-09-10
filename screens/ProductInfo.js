import React, { Component } from 'react';
import { View, ScrollView, Platform, TouchableHighlight } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles, mainColor } from '../styles';
import News from '../components/News';
import Products from '../hints/Products';
import { addMessage, getReply, changeTab } from '../actions';
import ProductIcon from './ProductIcon';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
  getReply: (text) => dispatch(getReply(text)),
  changeTab: (number) => dispatch(changeTab(number)),
})


class MyComponent extends Component {

  render() {

    return (
      <View 
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}
      >
        <View
          style={{
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#eee'
            //backgroundColor: 'red',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
              }}
            >
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: 'Lato-Bold',
                  fontSize: 20,
                  color: '#333',
                }}
              >Info</Text>
            </View>
            <Text
              style={{
                marginTop: 5,
                marginRight: 10,
                fontFamily: 'Lato-Regular',
                color: '#333',
              }}
            >EDIT</Text>
            </View>
          <View
            style={{
              flex: 3,
              flexDirection: 'row',
            }}
          >
            <Icon
              name='account-circle'
              type='material-community'
              size={80}
              color='#666'
              underlayColor='transparent'
              containerStyle={{
                flex: 2,
              }}
              onPress={()=>{
                
              }}
            />
            <View
              style={{
                flex: 3,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: 'Lato-Bold',
                  fontSize: 20,
                  color: '#333',
                  marginBottom: 5,
                }}
              >user92918283</Text>
              <Text
                style={{
                  fontFamily: 'Lato-Regular',
                  fontSize: 14,
                  marginBottom: 5,
                  color: '#666',
                }}
              >Belum ada email</Text>
              <Text
                style={{
                  fontFamily: 'Lato-Regular',
                  fontSize: 14,
                  marginBottom: 5,
                  color: '#666',
                }}
              >Belum ada nomor HP</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 3,
            backgroundColor: mainColor,
            margin: 10,
            borderRadius: 15,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon
              name='wallet'
              type='material-community'
              size={40}
              color='#fff'
              underlayColor='transparent'
              containerStyle={{
                marginRight: 5,
              }}
              onPress={()=>{
                  
              }}
            />
            <Text
              style={{
                fontFamily: 'Lato-Bold',
                fontSize: 28,
                color: '#fff',
              }}
            >Rp 0</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon
                name='plus-box-outline'
                type='material-community'
                size={30}
                color='#fff'
                underlayColor='transparent'
                containerStyle={{
                  marginBottom: 10,
                }}
                onPress={()=>{}}
              />
              <Text
                style={{
                  fontFamily: 'Lato-Bold',
                  textAlign: 'center',
                  fontSize: 14,
                  color: '#fff',
                }}
              >Top Up</Text>
            </View> 
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon
                name='cube-send'
                type='material-community'
                size={30}
                color='#fff'
                underlayColor='transparent'
                containerStyle={{
                  marginBottom: 10,
                }}
                onPress={()=>{}}
              />
              <Text
                style={{
                  fontFamily: 'Lato-Bold',
                  textAlign: 'center',
                  fontSize: 14,
                  color: '#fff',
                }}
              >Transfer</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon
                name='qrcode-scan'
                type='material-community'
                size={30}
                color='#fff'
                underlayColor='transparent'
                containerStyle={{
                  marginBottom: 10,
                }}
                onPress={()=>{}}
              />
              <Text
                style={{
                  fontFamily: 'Lato-Bold',
                  textAlign: 'center',
                  fontSize: 14,
                  color: '#fff',
                }}
              >Scan</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon
                name='input'
                type='material-icons'
                size={30}
                color='#fff'
                underlayColor='transparent'
                containerStyle={{
                  marginBottom: 10,
                }}
                onPress={()=>{}}
              />
              <Text
                style={{
                  fontFamily: 'Lato-Bold',
                  textAlign: 'center',
                  fontSize: 14,
                  color: '#fff',
                }}
              >Withdraw</Text>
            </View> 
          </View>        
        </View>
        <View
          style={{
            flex: 2,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
          
          </View>
          <TouchableHighlight
            underlayColor='#eee'
            style={{
              flex: 1,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
            onPress={()=>{
              this.props.navigation.navigate('Chat');
            }}
          >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
          >
            <Icon
                name='login'
                type='material-community'
                size={30}
                color='#333'
                underlayColor='transparent'
                containerStyle={{
                  marginRight: 10,
                  marginBottom: 10,
                }}
                onPress={()=>{
                    
                }}
            />
            <Text
              style={{
                fontFamily: 'Lato-Bold',
                fontSize: 20,
                marginBottom: 10,
                color: '#333',
              }}
            >LOGIN</Text>
          </View>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          underlayColor='#eee'
          style={{
            flex: 1,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
          onPress={()=>{
            this.props.navigation.goBack();
          }}
        >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <Icon
              name='close'
              type='material-community'
              size={30}
              color='#333'
              underlayColor='transparent'
              containerStyle={{
                marginRight: 10,
                marginBottom: 10,
              }}
              onPress={()=>{
                  
              }}
          />
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              fontSize: 20,
              marginBottom: 10,
              color: '#333',
            }}
          >KEMBALI</Text>
        </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const ProductInfo = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default ProductInfo;