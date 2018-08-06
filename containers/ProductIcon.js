import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { mainColor } from '../styles';
import { addMessage, getReply } from '../actions';

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),      
  getReply: (text) => dispatch(getReply(text)),      
})


const MyComponent = ({ name, type, text, onPress, addMessage, getReply }) => {
        return (
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
                containerStyle={{

                }}
                onPress={()=>{
                    onPress();
                    addMessage(text, true);
                    getReply(text);
                }}
                />
              <View
                height={50}
              >
              <Text
                style={{
                  fontSize: 14,
                  color: '#333',
                  marginTop: 10,
                  textAlign: 'center',
                  textAlignVertical: 'top',
                }}
              >{text}</Text>
              </View>
            </View>
        );
    }

const ProductIcon = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)  

export default ProductIcon;

