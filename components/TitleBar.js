import React from 'react';
import { View, Image } from 'react-native';
import { Text, Icon } from 'react-native-elements';
//our import
import { titleBar } from '../styles';

const TitleBar = () => {
        return (
            <View 
                style={titleBar.mainContainer}
            >
                <View
                    style={titleBar.leftContainer}
                >
                    <Image
                        source= {require('../Man-05.png')}
                        style={titleBar.leftImage}
                    />
                    <Text
                        style={titleBar.leftText}
                    >
                        Mas Bay
                    </Text>
                </View>
                <View
                    style={titleBar.rightContainer}
                >
                    <Text
                        style={titleBar.rightText}
                    >
                        Menu
                    </Text>
                    <Icon 
                    name='keyboard-arrow-right'
                    type='material-icons'
                    color={'#3e3e3f'}
                    size={36}
                    containerStyle={titleBar.rightIcon}
                    />
                </View>
            </View>
        );
    }

export default TitleBar;