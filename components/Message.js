import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
//our import
import { styles } from '../styles/chat';


    

const Message = ({text, isUser}) => {
    const isImage = () => {
        if (!isUser) 
        return (<Image
            source= {require('../Man-05.png')}
            style={{
                marginTop: 10,
                width: 60,
                height: 60,
            }}
        />)
    }
    
    const image = isImage();
    
        return (
            <Animatable.View animation='bounceIn'>
                <View 
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                    }}
                >
                    {image}
                    <View
                        style={isUser ? styles.messageContainerUser : styles.messageContainerBot}
                    >
                    
                        <View
                        style={isUser ? styles.messageBubbleUser : styles.messageBubbleBot}
                        >
                            <Text
                                style={isUser ? styles.messageTextUser : styles.messageTextBot}
                            >
                                {text}
                            </Text>          
                        </View>
                    </View>
                </View>
            </Animatable.View>
            
        );
    }

export default Message;