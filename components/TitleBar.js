import React from 'react';
import { View, Image } from 'react-native';
import { Text, Icon } from 'react-native-elements';
//our import

const TitleBar = ({ text }) => {
        return (
            <View
                flexDirection='row'
                alignItems='center'
                height={64}
                backgroundColor='#fff'
                elevation={3}
            >
                <View
                //flex={1}
                >

                </View>
                <View
                flex={1}
                alignItems='center'
                >
                <Text
                    style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    marginLeft: 10,
                    }}
                >{text}</Text>
                </View>
                <View
                //flex={1}
                >

                </View>
            </View>
        )
    }

export default TitleBar;