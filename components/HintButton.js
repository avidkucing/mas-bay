import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

const HintButton = ({ text, onPress }) => {
        return (
            <TouchableOpacity
                onPress={onPress}
                key={text}
            > 
                <View
                style={{
                    backgroundColor: 'white',
                    borderRadius: 25,
                    marginLeft: 15,
                    alignSelf: 'flex-start',
                    elevation: 1,
                    marginTop: 10,
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
            </TouchableOpacity>
        );
    }

export default HintButton;