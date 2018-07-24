import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
//our import
import { chatComponents } from '../styles';
import Message from './Message';

const ChatWindow = state => {

    _keyExtractor = (item, index) => item.id;
    
    return (
    
    <View style={chatComponents.chatWindow}>
        <FlatList
            ref={chat => this.chat = chat}
            onContentSizeChange={(contentWidth, contentHeight)=>{        
                this.chat.scrollToEnd({animated: true});
            }}
            keyExtractor={this._keyExtractor}
            data={state.messages}
            overScrollMode='never'
            renderItem={({item}) => 
                <Message
                    key={item.id}
                    text={item.text}
                    isUser={item.isUser}
                    id={item.id}
                /> 
            }
        />
    </View>
)}

export default ChatWindow;