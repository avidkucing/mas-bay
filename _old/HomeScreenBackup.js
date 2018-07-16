import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Avatar, Text, Icon, FormInput } from 'react-native-elements';
//our import
import Message from '../Components/Message';
import HintButton from '../Components/HintButton';


const mainColor = '#fabc3d';
const secondaryColor = '#3e3e3f';
const tintColor= '#f37a10';
const shadeColor= '#fddea0';
const messageColor= 'white';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    //this.addMessage = this.addMessage.bind(this);

    this.state = {
      messages: [<Message key={0} text='Mau beli apa hari ini?' user={false} color={messageColor}/>],
      mId: 1,
      text: '',
      reply: '',
      button: 'microphone',
    }; 
  }

  addMessage = (message,isUser) => {
    //console.log('-------------------------------------------------------------------');
    this.setState((prevState) => ({
      messages: [...prevState.messages, <Message key={prevState.mId} text={message} user={isUser} color={messageColor}/>],
      mId: prevState.mId + 1,
    }))
    this.clearTextState();
  }

  getReply = (message) => {
    console.log(message);
    axios.post('https://1dbd47f1.ngrok.io/chat', {
      text: message,
    })
    .then((response) => {
      console.log(response);
      this.setState((prevState) => ({
        reply: response.data,
      }))
      this.addMessage(this.state.reply, false);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  clearTextState = () => {
    this.input.clearText();
    this.setState((prevState) => ({
      text: '',
      reply: '',
    }));
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={{
          flexDirection:'row',
          elevation: 5,
          height: 50,
          width: 360,
          backgroundColor: mainColor,
          //marginBottom: 10,
        }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source= {require('../Man-05.png')}
              style={{
                width: 60,
                height: 60,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: secondaryColor,
                fontWeight: 'bold',
              }}
            >
              Mas Bay
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
              }}
            >
              Menu
            </Text>
            <Icon 
              name='keyboard-arrow-right'
              type='material-icons'
              color={secondaryColor}
              size={36}
              containerStyle={{
                marginRight: 10,
              }}
            />
          </View>
        </View>
        <View style={{ 
          flex: 10,
          backgroundColor: shadeColor,
          }}>
          <ScrollView 
            ref={chat => this.chat = chat}
            onContentSizeChange={(contentWidth, contentHeight)=>{        
              this.chat.scrollToEnd({animated: true});
            }}
          >
            {this.state.messages}
          </ScrollView> 
        </View>
        <View
          flexDirection='row' 
          style={{ 
            height: 60,
            flexDirection: 'row',
            alignItems: 'flex-end',
            backgroundColor: shadeColor,
          }}
        >
          <HintButton 
            options={['pulsa','saldo','kucing','yang panjang pokoknya']} 
            color={messageColor}
            //onPress={this.addMessage}
          />
        </View>
        <View 
          flexDirection='row' 
          style={{ 
            height: 60,
            flexDirection: 'row',
            width: 360,
            alignItems: 'center',
            backgroundColor: shadeColor,
          }}
        >
          <FormInput 
            ref={input => this.input = input}
            onChangeText={(text) => {
              if(text==='') {
                this.setState({
                  text: text,
                  button: 'microphone',
                })
              } else {
                this.setState({
                  text: text,
                  button: 'send',
                })
              }
            }}
            onSubmitEditing={() => {
              if(this.state.text!=='') {
                this.addMessage(this.state.text, true);
                this.getReply(this.state.text);
              }
            }}
            onEndEditing={()=>
              this.setState({
                button: 'microphone',
              })
            }
            placeholder='Ketik disini...'
            underlineColorAndroid='transparent'
            returnKeyLabel='send'
            containerStyle={{
              width: 280,
              height: 40,
              //borderColor: mainColor,
              //borderWidth: 2,
              borderRadius: 50,
              justifyContent: 'center',
              marginRight: 3,
              elevation: 1,
              backgroundColor: 'white',
            }}
            inputStyle={{
              margin: 10,
              width: 240,
            }} 
          />
          <Icon
            reverse
            onPress={()=>{
              if(this.state.text!=='') {
                this.addMessage(this.state.text, true);
                this.getReply(this.state.text);
              }
            }}
            name={this.state.button}
            type='font-awesome'
            color={mainColor}
            reverseColor={secondaryColor}
            size={20}
            containerStyle={{
              elevation: 1,
              marginBottom: 10,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

