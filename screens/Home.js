import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import {  } from 'react-native-elements';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator, ViewPager} from 'rn-viewpager';
//our import
import { styles } from '../styles';
import BottomTab from '../containers/BottomTab';
import WhatsNew from './WhatsNew';
import Profil from './Profil';

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  
})


class MyComponent extends Component {

  render() {

    return (
      <View style={styles.rootContainer}>
        <ScrollView
          ref={page => this.page = page}
          scrollEnabled={false}
          overScrollMode='never'
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <WhatsNew onPress={()=>this.props.navigation.navigate('Chat')} />
          <Profil />
        </ScrollView>
        <BottomTab 
          onPress={()=>this.props.navigation.navigate('Chat')}
          onPressRight={()=>this.page.scrollToEnd()}//({ x: 360 })}
          onPressLeft={()=>this.page.scrollTo({ x: 0 })}
        />
      </View>
    );
  }
}

const Home = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Home;
