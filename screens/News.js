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
    const news = require('../dummy_database/news1.json');

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
                {news.text}
            </Text>
        )} else {return (
            <MyWebView 
                style={{
                    width: 340,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop : 10,
                }}
                source={require('../dummy_database/news1.html')} 
                startInLoadingState={true}
            />
        )}
    }

    const text = renderText();

    return (
      <View style={styles.rootContainer}>
        <ScrollView
            contentContainerStyle={{
                width: Platform.OS==='ios' ? 380 : 360,
            }}
        >
            <ImageBackground
              source={require('../assets/news1.jpeg')}
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
                >Mas Bay Release Event</Text>
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
