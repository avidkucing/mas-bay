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
                    
                </View>
                <View style={titleBar.centerContainer}>
                    <Text 
                        style={titleBar.centerText}
                    >
                        Chat
                    </Text>
                </View>
                <View
                    style={titleBar.rightContainer}
                >

                </View>
            </View>
        );
    }

export default TitleBar;