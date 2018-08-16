import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { mainColor } from '../styles';
import { addMessage, getReply, changeHint } from '../actions';

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),      
  getReply: (text) => dispatch(getReply(text)),      
  changeHint: (number) => dispatch(changeHint(number)),
})


const MyComponent = ({ name, type, text, changeHint, addMessage, getReply, onPress }) => {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 5,
        marginBottom: 5,
      }}
    >
    <TouchableOpacity
      onPress={()=>{
        onPress===undefined ? null : onPress();
        addMessage(text, true);
        getReply(text);
        if (text==='Pulsa') changeHint();
      }}
      flex={1}
    >
      <Icon
        name={name}
        type={type}
        size={40}
        color={mainColor}
        iconStyle={{
          //textShadowOffset:{width: 1, height: 1},
          //shadowColor:'#000',
          //shadowOpacity:0.3
        }}
        containerStyle={{

        }}
        
        />
      <Text
        style={{
          fontFamily: 'Lato-Regular',
          fontSize: 14,
          color: '#333',
          marginTop: 10,
          textAlign: 'center',
          textAlignVertical: 'top',
        }}
      >{text}</Text>
    </TouchableOpacity>
    </View>
  );
}

const ProductIcon = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)  

export default ProductIcon;

