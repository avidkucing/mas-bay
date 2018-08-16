import React, { Component } from 'react';
import { View, Platform, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Pages } from 'react-native-pages';
//our import
import NewsItem from '../components/NewsItem';
import ProductIcon from '../components/ProductIcon';
import { mainColor } from '../styles';
import PulsaNominal from '../hints/PulsaNominal';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentPage: 0,
    };
    this.scrolling = this.scrolling.bind(this);
  }

  componentDidMount() {
    this.activeInterval = setInterval(this.scrolling, 3000);
  }

  componentWillUnmount(){
    clearInterval(this.activeInterval);
  }

  scrolling() {
    // Increment position with each new interval
    page = this.state.currentPage + 1;
    
    // Set animation to repeat at end of scroll
    if (this.state.currentPage > 2) {
          this.news.scrollToPage(0);
          this.setState({ currentPage: 0 });
    }
    else {
      this.news.scrollToPage(page);
      this.setState({ currentPage: page });
    }
  }
  
  render() {
    width= Platform.OS==='ios' ? 350 : 340;

    return (

      <View
        //width={Platform.OS==='ios' ? 370 : 360}
        //height={Platform.OS==='ios' ? 310 : 280}
        flex={1}
      >
        <Pages
          indicatorColor='#333'
          ref={news => this.news = news}
          flex={1}
        >
        <View 
          style={{ 
            flex: 1,
            alignItems: 'center',
          }}
        >
          <NewsItem
            index={1}
            image={require('../assets/news1.jpeg')}
            width={width}
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
            image={require('../assets/news2.jpg')}
            width={width}
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
            image={require('../assets/news3.jpg')}
            width={width}
            title= 'Feature Survey'
            subtitle= 'Fitur apa yang kamu inginkan?'
            onPress={this.props.onPressNews}
          />
        </View>
        </Pages>
      </View>
    );
  }
}

export default News;