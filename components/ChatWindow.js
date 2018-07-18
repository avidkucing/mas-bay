import React from 'react';
import { View, ScrollView } from 'react-native';
import Message from './Message';

const ChatWindow = state => {
    
    return (
    
    <View style={{ 
        flex: 10,
        backgroundColor: '#fddea0',
    }}>
        <ScrollView 
            ref={chat => this.chat = chat}
            onContentSizeChange={(contentWidth, contentHeight)=>{        
                this.chat.scrollToEnd({animated: true});
            }}
        >
            {state.messages.map(message =>
                <Message
                    key={message.id}
                    text={message.text}
                    isUser={message.isUser}
                    id={message.id}
                />            
            )}
        </ScrollView>
    </View>
)}

export default ChatWindow;