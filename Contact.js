import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements'

export default class Contact extends Component {
    
    render() {
        let defaultText;

        if (this.props.default) {
            defaultText = (
            <Text style={{
                color: 'pink',
            }}>Terakhir dipakai</Text>)
        }

        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{
                    alignItems:'center',
                    marginBottom: 20,
                }}
                >
                    {defaultText}
                    <Text style={{
                        fontWeight:'bold',
                        fontSize: 18,
                    }}
                    >{this.props.name}</Text>
                    <Text style={{
                        fontSize: 18,
                    }}    
                    >{this.props.number}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}