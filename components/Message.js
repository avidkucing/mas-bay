import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
//our import
import { chatComponents } from '../styles';

const Message = ({text, isUser}) => {

        return (
            <View
                style={isUser ? chatComponents.messageContainerUser : chatComponents.messageContainerBot}
            >
                <View
                style={chatComponents.messageBubble}
                >
                    <Text
                        style={chatComponents.messageText}
                    >
                        {text}
                    </Text>          
                </View>
            </View>
        );
    }

export default Message;