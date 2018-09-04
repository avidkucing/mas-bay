import React from 'react';
import { View, Image, Platform } from 'react-native';
import { Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
//our import
import { styles, mainColor } from '../styles';


    

const Message = ({id, isShowImage, text, isUser}) => {
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
            <Animatable.View
                animation='pulse'
            >
                <View 
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        marginTop: 10,

                    }}
                >
                    <View
                        style={isUser ? styles.messageContainerUser : {
                            width: 360,
                            justifyContent: 'flex-start',
                            flexDirection: 'row',
                        }}
                    >
                    {image}                    
                        <View
                        style={isUser ? {
                            backgroundColor: mainColor,
                            borderRadius: 15,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 15,
                            marginRight: 15,
                            maxWidth: 280,
                            elevation: 3,
                            shadowOffset: { height: 1, width: 1 },
                            shadowColor: 'black',
                            shadowOpacity: 0.3,
                        } : styles.messageBubbleBot}
                        >
                            <Text
                                style={isUser ? {
                                    margin: 10,
                                    marginRight: 20,
                                    marginLeft: 20,
                                    color: '#fff',
                                    fontSize: 14,
                                    fontFamily: 'Lato-Regular',
                                } : {
                                    margin: 10,
                                    marginRight: 20,
                                    marginLeft: 20,
                                    color: '#666',
                                    fontSize: 14,
                                    fontFamily: 'Lato-Regular',
                                }}
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