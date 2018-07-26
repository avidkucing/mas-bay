import React from 'react';
import {  } from 'react-native';
import { Button } from 'react-native-elements';
//our import
import { mainColor, backgroundColor } from '../styles';


const ButtonPrimary = ({ text, onPress, mb }) => {
        return (
            <Button
                title={text}
                onPress={onPress}
                containerViewStyle={{

                }}
                textStyle={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: 'bold',
                    margin: 5,
                }}
                buttonStyle={{
                    borderRadius: 25,
                    backgroundColor: mainColor,
                }}
            />
        );
    }

export default ButtonPrimary;