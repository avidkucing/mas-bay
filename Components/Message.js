import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';

export default class Message extends Component {

    render() {
        let align = 'flex-start';
        
        if (this.props.user) {
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
                    backgroundColor: this.props.color,
                    //borderColor: 'pink',
                    //borderWidth: 2,
                    borderRadius: 50,
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
                        }}
                    >
                        {this.props.text}
                    </Text>          
                </View>
            </View>
        );
    }
}