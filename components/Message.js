import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

const Message = ({text, isUser}) => {
        let align = 'flex-start';
        
        if (isUser) {
            align = 'flex-end';
        }

        return (
            <View
                style={{
                width: 360,
                justifyContent: align,
                flexDirection: 'row',
                marginTop: 10,
                //marginBottom: 10,
                }}
            >
                <View
                style={{
                    backgroundColor: 'white',
                    //borderColor: this.props.borderColor,
                    //borderWidth: 1,
                    borderRadius: 25,
                    marginLeft: 15,
                    marginRight: 15,
                    maxWidth: 280,
                }}
                >
                    <Text
                        style={{
                        margin: 10,
                        marginRight: 20,
                        marginLeft: 20,
                        //color: this.props.textColor,
                        }}
                    >
                        {text}
                    </Text>          
                </View>
            </View>
        );
    }

export default Message;