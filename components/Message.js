import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
//our import
import { chatComponents } from '../styles';


    

const Message = ({text, isUser}) => {
    const isImage = () => {
        if (!isUser) 
        return (<Image
            source= {require('../Man-05.png')}
            style={{
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
                        style={isUser ? chatComponents.messageContainerUser : chatComponents.messageContainerBot}
                    >
                    
                        <View
                        style={isUser ? chatComponents.messageBubbleUser : chatComponents.messageBubbleBot}
                        >
                            <Text
                                style={isUser ? chatComponents.messageTextUser : chatComponents.messageTextBot}
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