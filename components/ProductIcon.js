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


const MyComponent = ({ name, type, text, changeHint, addMessage, getReply }) => {

  return (
    <TouchableOpacity
      onPress={()=>{
        //onPress();
        addMessage(text, true);
        getReply(text);
        if (text==='Pulsa') changeHint();
      }}
    >
    <View
      style={{
        width: 80,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon
        name={name}
        type={type}
        size={40}
        color={mainColor}
        componentstyle={{

        }}
        
        />
      <View
        height={50}
      >
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
      </View>
    </View>
    </TouchableOpacity>

  );
}

const ProductIcon = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)  

export default ProductIcon;

