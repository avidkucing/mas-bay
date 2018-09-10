import React, { Component } from 'react';
import { View, ScrollView, Platform, TouchableHighlight } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles, mainColor } from '../styles';
import News from '../components/News';
import Products from '../components/Products';
import { addMessage, getReply, changeTab } from '../actions';


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
            height: 48,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            elevation: 1,
            shadowOffset: { height: -2 },
            shadowColor: 'black',
            shadowOpacity: 0.3,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontFamily: 'Lato-Bold',
                fontSize: 24,
                color: '#333',
              }}
            >What's New</Text>
          </View>
        </View>
        <View
          style={{
            flex: 6,
            
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
              >Berita dan Promo</Text>
            </View>
            <Text
              style={{
                marginTop: 5,
                marginRight: 10,
                fontFamily: 'Lato-Regular',
                color: '#333',
              }}
            >LIHAT SEMUA</Text>
          </View>
          <View
            style={{
              flex: 5,
            }}
          >
            <News 
              onPressNews={()=>this.props.navigation.navigate('News')}
            />
          </View>
        </View>
        <View
          style={{
            flex: 5,
            marginTop: 10,
            //alignItems: 'center',
            //backgroundColor: 'red'
          }}
        >
            <Products onPress={()=>{}}/>
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

const Home = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Home;