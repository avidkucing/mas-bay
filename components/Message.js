import React from 'react';
import { View, Image, Platform } from 'react-native';
import { Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
//our import
import { styles } from '../styles';


    

const Message = ({id, isShowImage, text, isUser}) => {
    const isImage = () => {
        if (!isUser) 
        return (<Image
            source= {require('../Man-05.png')}
            style={{
                //marginTop: 10,
                width: 60,
                height: 60,
            }}
        />)
    }
    
    const image = isImage();
    
        return (
            <View>
                <View 
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        marginTop: Platform.OS === 'ios' ? 10 : 0,

                    }}
                >
                    <View
                        style={isUser ? styles.messageContainerUser : {
                            width: 360,
                            justifyContent: 'flex-start',
                            //alignItems: 'center',
                            flexDirection: 'row',
                            marginTop: id === '0' ? Platform.OS === 'ios' ? 30 : 10 : 0,
                        }}
                    >
                    {image}                    
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
            </View>
            
        );
    }

export default Message;