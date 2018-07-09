import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';

export default class ButtonPrimary extends Component {

    render() {

        return (
            <TouchableOpacity
                onPress={this.props.onPress}
            >
                <View 
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: 'pink',
                    width: this.props.width,
                    height: this.props.height,
                }}
                >
                    <Text
                        style={{
                            color: 'pink',
                        }}
                    >{this.props.title}</Text>
                    <Icon 
                    name= 'chevron-right'
                    type= 'entypo'
                    color= 'pink'
                    size= {20}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}