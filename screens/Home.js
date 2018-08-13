import React, { Component } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import {  } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles } from '../styles';
import BottomTab from '../containers/BottomTab';
import WhatsNew from './WhatsNew';
import Profil from './Profil';
import { addMessage, getReply } from '../actions';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
  getReply: (text) => dispatch(getReply(text)),  
})


class MyComponent extends Component {

  componentDidMount() {
    if(this.props.state.welcome) {
      //this.props.addMessage('Hai! Aku Mas Bay. Aku bisa beliin kamu macem-macem lho. Bisa pulsa, kuota internet, token listrik, dll.', false);
      this.props.getReply('reset');
      this.page.scrollTo({ x: Platform.OS==='ios' ? 5 : 0});
    }
  }

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
          <WhatsNew 
            onPressNews={()=>this.props.navigation.navigate('News')} 
            onPressProduct={()=>this.props.navigation.navigate('Chat')} 
          />
          <Profil 
            onPressTopUp={()=>this.props.navigation.navigate('Chat')}
            onPressNotif={()=>this.props.navigation.navigate('Notif')}
            onPressRiwayat={()=>this.props.navigation.navigate('Riwayat')}
            onPressSettings={()=>this.props.navigation.navigate('Setting')}
            onPressLogout={()=>this.props.navigation.navigate('Daftar')}
          />
        </ScrollView>
        <BottomTab 
          onPress={()=>this.props.navigation.navigate('Chat')}
          onPressRight={()=>this.page.scrollToEnd()}//({ x: 360 })}
          onPressLeft={()=>this.page.scrollTo({ x: Platform.OS==='ios' ? 5 : 0})}
        />
      </View>
    );
  }
}

const Home = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default Home;
