import React, { Component } from 'react';
import { View, Platform, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Pages } from 'react-native-pages';
//our import
import NewsItem from '../containers/NewsItem';
import ProductIcon from '../containers/ProductIcon';
import { mainColor } from '../styles';

class WhatsNew extends Component {
  
  render() {

    return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginLeft: Platform.OS==='ios' ? 8 : 0,
            marginRight: Platform.OS==='ios' ? 8 : 0,
            //opacity: 0,
          }}
        >
          <Text
            style={{
              marginTop: Platform.OS==='ios' ? 30 : 20,
              fontWeight: 'bold',
              fontSize: 24,
              color: '#333',
            }}
          >Welcome to Mas Bay!</Text>
          <View
            marginTop={10}
            height={Platform.OS==='ios' ? 310 : 280}
            width={360}
          >
            <Pages
              indicatorColor='#000'
              //ref={news => this.news = news}
            >
            <View 
              style={{ 
                flex: 1,
                alignItems: 'center',
              }}
            >
              <NewsItem
                index={1}
                height={Platform.OS==='ios' ? 270 : 240}
                width={320}
                image={require('../assets/news1.jpeg')}
                title= 'Mas Bay Release Event'
                subtitle= 'Join now to get all the fun and our interesting offers!'
                onPress={this.props.onPressNews}
              />
            </View>
            <View 
              style={{ 
                flex: 1,
                alignItems: 'center',
              }}
            >
              <NewsItem
                index={2}
                height={Platform.OS==='ios' ? 270 : 240}
                width={320}
                image={require('../assets/news2.jpg')}
                title= 'Daftar Harga Pulsa'
                subtitle= 'Update 08 Agustus 2018'
                onPress={this.props.onPressNews}
              />
            </View>
            <View 
              style={{ 
                flex: 1,
                alignItems: 'center',
              }}
            >
              <NewsItem
                index={3}
                height={Platform.OS==='ios' ? 270 : 240}
                width={320}
                image={require('../assets/news3.jpg')}
                title= 'Feature Survey'
                subtitle= 'Fitur apa yang kamu inginkan?'
                onPress={this.props.onPressNews}
              />
            </View>
            </Pages>
            
          </View>
          <ScrollView
            contentContainerStyle={{
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
                onPress={this.props.onPressProduct}
              />
              <ProductIcon
                name='cellphone-wireless'
                type='material-community'
                text='Kuota Internet'
                onPress={this.props.onPressProduct}

              />
              <ProductIcon
                name='thunder-cloud'
                type='entypo'
                text='Token Listrik'
                onPress={this.props.onPressProduct}

              />
              <ProductIcon
                name='water'
                type='material-community'
                text='PDAM'
                onPress={this.props.onPressProduct}

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
                onPress={this.props.onPressProduct}

              />
              <ProductIcon
                name='google-play'
                type='material-community'
                text='Voucer GPlay'
                onPress={this.props.onPressProduct}

              />
              <ProductIcon
                name='nature-people'
                type='material-community'
                text='Paket Travel'
                onPress={this.props.onPressProduct}

              />
              <ProductIcon
                name='airplane-takeoff'
                type='material-community'
                text='Umroh'
                onPress={this.props.onPressProduct}

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
                onPress={this.props.onPressProduct}

              />
            </View>
          </ScrollView>
        </View>
    );
  }
}

export default WhatsNew;