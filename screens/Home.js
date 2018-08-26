import React, { Component } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles, mainColor } from '../styles';
import BottomTab from '../components/BottomTab';
import News from '../components/News';
import Profil from './Profil';
import { addMessage, getReply, changeTab } from '../actions';
import Products from '../hints/Products';
import TitleBar from '../components/TitleBar';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
  getReply: (text) => dispatch(getReply(text)),
  changeTab: (number) => dispatch(changeTab(number)),
})


class MyComponent extends Component {

  componentDidMount() {
    if(this.props.state.welcome) {
      //this.props.addMessage('Hai! Aku Mas Bay. Aku bisa beliin kamu macem-macem lho. Bisa pulsa, kuota internet, token listrik, dll.', false);
      //this.props.getReply('reset');
    }
  }

  render() {

    return (
      <View style={styles.rootContainer}>
        <View
          style={{
            flex: 1,
          }}
        >
          <TitleBar title='Beranda' /> 
        </View>
        <View
          style={{
            flex: 6,
            //backgroundColor: 'blue'
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
            //backgroundColor: 'red'
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            
          </View>
          <View
            style={{
              flex: 9,
            }}
          >
            <Products onPress={()=>this.props.navigation.navigate('Chat')}/>
          </View>
        </View>
      </View>
    );
  }
}

const Home = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Home;