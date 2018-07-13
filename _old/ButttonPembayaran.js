import React, { Component } from '../../../.cache/typescript/2.9/node_modules/@types/react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';

export default class ButtonPembayaran extends Component {

    render() {

        return (
            <TouchableOpacity
                onPress={this.props.onPress}
            >
                <View 
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                    backgroundColor: 'pink',
                    width: this.props.width,
                    height: this.props.height,
                    margin: 10,
                }}
                >
                    <Text
                        style={{
                            color: 'white',
                        }}
                    >{this.props.title}</Text>
                    <Text h4
                        style={{
                            color: 'white',
                        }}
                    >{this.props.subtitle}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}