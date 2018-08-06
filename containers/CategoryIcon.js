import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import Voice from 'react-native-voice';
import { connect } from 'react-redux';
//our import
import { inputComponents, mainColor } from '../styles';
import { addMessage, getReply, startRecognizing,
    addPartialResult,
    setInputValue, } from '../actions';

const mapStateToProps = state => ({
    state: state,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
    getReply: (text) => dispatch(getReply(text)),
    startRecognizing: () => dispatch(startRecognizing()),
    addPartialResult: (result) => dispatch(addPartialResult(result)),
    setInputValue: (text) => dispatch(setInputValue(text)),
})

const MyIcon = ({name, title, type, reverse, color, reverseColor}) => {

    return (
        <TouchableOpacity>
        <View
            alignItems='center'
        >
            <Icon
                reverse={reverse}
                name={name}
                type={type || 'material-icons'}
                size={reverse ? 20 : 50}
                color={color || mainColor}
                reverseColor={reverseColor || '#666'}
                containerStyle={{
                    marginTop: reverse ? 5 : 0,
                    marginRight: 30,
                    marginLeft: 30,
                }}
            />
            <Text
                style={{
                    color: mainColor,
                }}
            >
                {title}
            </Text>
        </View>
        </TouchableOpacity>
    );
    }

const CategoryIcon = connect(
    mapStateToProps, mapDispatchToProps
)(MyIcon)

export default CategoryIcon;