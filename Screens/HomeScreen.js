import React, { Component } from 'react';
import axios from 'axios';
import { Keyboard, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Avatar, Text, Icon, FormInput } from 'react-native-elements';
//our import
import Message from '../Components/Message';

const linkHabib = 'https://intense-inlet-67504.herokuapp.com/chat';
const linkKukuh ='http://8df7379e.ngrok.io/chat';

const mainColor = '#fabc3d';
const secondaryColor = '#3e3e3f';
const tintColor= '#f37a10';
const shadeColor= '#fddea0';
const white= 'white';

const options1 = ['pulsa'];
const options2 = ['085692355339']; 
const options3 = ['50000', '100000', '5000', '10000', '20000', '25000'];
const options4 = ['saldo', 'bni', 'bca', 'mandiri'];
const options5 = ['y', 'n'];

const allOptions = [options1, options2, options3, options4, options5];

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [<Message key={0} text='Mau beli apa hari ini?' user={false} color={white}/>],
      mId: 1,
      text: '',
      reply: '',
      intent: '',
      button: 'microphone',
      options: options1,
      optionsNumber: 0,
      isOptionsShowed: true,
    }; 
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    //return true;
  }

  _keyboardDidHide () {
    //return true;
  }

  addMessage = (message,isUser) => {
    //console.log('-------------------------------------------------------------------');
    this.setState((prevState) => ({
      messages: [...prevState.messages, <Message key={prevState.mId} text={message} user={isUser} color={white}/>],
      mId: prevState.mId + 1,
    }))
    this.clearTextState();
  }

  getReply = (message) => {
    console.log(message);
    axios.post(linkHabib, {
      text: message,
    })
    .then((response) => {
      //console.log(response.data);
      
      let data = response.data.split('*');
      let reply = data[0];
      if (1<data.length) {
        let intent = data[1];
        this.setState(() => ({
          intent: intent,
        }))
        this.changeOptions(this.state.intent);
      }
      
      this.setState((prevState) => ({
        reply: reply,
        isOptionsShowed: true,
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

  changeOptions = (intent) => {
    switch (intent) {
      case 'nmr': 
        this.setState(() => ({
          optionsNumber: 1,
        }));
        break;
      case 'nom': 
        this.setState(() => ({
          optionsNumber: 2,
        }));
        break;
      case 'bay': 
        this.setState(() => ({
          optionsNumber: 3,
        }));
        break;
      case 'yn': 
        this.setState(() => ({
          optionsNumber: 4,
        }));
        break;
      case 'n':
        this.setState(() => ({
          optionsNumber: 0,
        }));
        this.getReply('reset');
      default:
        this.setState((prevState) => ({
          optionsNumber: prevState.optionsNumber,
        }));
    }
    this.setState(() => ({
      options: allOptions[this.state.optionsNumber],
    }));
  }

  render() {
    renderOptionsComponent = () => {
      if (this.state.isOptionsShowed)
      return (<View
        flexDirection='row' 
        style={{ 
          height: 60,
          flexDirection: 'row',
          alignItems: 'flex-end',
          backgroundColor: shadeColor,
        }}
        >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {this.state.options.map((text)=>
          <TouchableOpacity
              onPress={()=>{
                this.addMessage(text, true);
                this.setState((prevState) => ({
                  isOptionsShowed: false,
                })); 
                this.getReply(text); 
              }}
              key={text}
          > 
            <View
              style={{
                  backgroundColor: 'white',
                  borderRadius: 25,
                  marginLeft: 15,
                  alignSelf: 'flex-start',
                  elevation: 1,
                  marginBottom: 5,
              }}
            >
              <Text
                  style={{
                    margin: 10,
                    marginRight: 20,
                    marginLeft: 20,
                  }}
              >
                  {text}
              </Text>          
            </View>
          </TouchableOpacity>)}
        </ScrollView> 
      </View>)
    }

    let optionsComponent = renderOptionsComponent();

    return (
      <View style={styles.container}>
        <View style={{
          flexDirection:'row',
          elevation: 5,
          height: 50,
          width: 360,
          backgroundColor: mainColor,
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
                color: secondaryColor,
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
        {optionsComponent}
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
            onFocus={()=>{
              this.setState((prevState) => ({
                isOptionsShowed: false,
              }));
            }}
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
            onEndEditing={()=>{
              this.setState({
                button: 'microphone',
              });
              this.setState((prevState) => ({
                isOptionsShowed: true,
              }));
            }}
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

