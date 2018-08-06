import React from 'react';
import {  } from 'react-native';
import { Text } from 'react-native-elements';
//our import
import { mainColor } from '../styles';


const TextPrimary = ({ text, type, size, mb }) => {
        return (
            <Text
                style={{
                    fontSize: size || 14,
                    fontWeight: type || 'normal',
                    color: mainColor,
                    marginBottom: mb || 0,
                }}
            >{text}</Text>
        );
    }

export default TextPrimary;