import React, { Component } from 'react';
import { View, ScrollView, Platform, ImageBackground } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import MyWebView from 'react-native-webview-autoheight';
//our import
import { styles } from '../styles';

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  
})


class MyComponent extends Component {

  render() {
    let image = '';
    let title = '';
    let contentAndroid = '';
    let contentIOS = '';


    const renderNews = () => {
      switch (this.props.state.currentNewsIndex) {
        case 1: {
          image = require('../assets/news1.jpeg');
          title = 'Mas Bay Release Event';
          contentAndroid = require('../dummy_database/news1.html');
          contentIOS = require('../dummy_database/news1.json');
          break;
        }
        case 2: {
          image = require('../assets/news2.jpg');
          title = 'Daftar Harga Pulsa';
          contentAndroid = require('../dummy_database/news2.html');
          contentIOS = require('../dummy_database/news2.json');
          break;
        }
        case 3: {
          image = require('../assets/news3.jpg');
          title = 'Feature Survey';
          contentAndroid = require('../dummy_database/news3.html');
          contentIOS = require('../dummy_database/news3.json');
          break;
        }
      }
    }

    const renderText = () => {
        if (Platform.OS==='ios') {return (
            <Text
                style={{
                    textAlign: 'justify',
                    color: '#333',
                    fontSize: 16,
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 20,
                }}
            >
                {contentIOS.text}
            </Text>
        )} else {return (
            <MyWebView 
                style={{
                    width: 340,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop : 10,
                }}
                source={contentAndroid} 
                startInLoadingState={true}
            />
        )}
    }

    const news = renderNews();
    const text = renderText();

    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
        <ScrollView
            contentContainerStyle={{
                width: Platform.OS==='ios' ? 380 : 360,
            }}
        >
            <ImageBackground
              source={image}
              style={{
                  flex: 1,
                  height: Platform.OS==='ios' ? 300 : 270,
                  justifyContent: 'flex-end'
              }}
              imageStyle={{
                
              }}
            >
              <View
                backgroundColor='#333333aa'
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 36,
                    fontWeight: 'bold',
                    marginTop: 10,
                    marginLeft: 10,
                    marginBottom: 10,
                  }}
                >{title}</Text>
              </View>
            </ImageBackground>
            {text}
        </ScrollView>
      </View>
    );
  }
}

const News = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default News;
