import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
//our import
import { hintComponents } from '../styles';

const HintButton = ({ text, onPress }) => {
        return (
            <TouchableOpacity
                onPress={onPress}
                key={text}
            > 
                <View
                style={hintComponents.hintButtonContainer}
                >
                <Text
                    style={hintComponents.hintButtonText}
                >
                    {text}
                </Text>          
                </View>
            </TouchableOpacity>
        );
    }

export default HintButton;