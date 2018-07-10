import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';

export default class ButtonPrimary extends Component {

    render() {
        let iconLeft; 
        let iconRight;

        if (this.props.icon=='left') {
            iconLeft = (
                <Icon 
                    name= {this.props.iconName}
                    type= {this.props.iconType}
                    color= 'pink'
                    size= {20}
                />
            )
        }

        if (this.props.icon=='right') {
            iconRight = (
                <Icon 
                    name= {this.props.iconName}
                    type= {this.props.iconType}
                    color= 'pink'
                    size= {20}
                />
            )
        }

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
                    bColor: 'pink',
                    width: this.props.width,
                    height: this.props.height,
                }}
                >
                    {iconLeft}
                    <Text
                        style={{
                            color: 'pink',
                        }}
                    >{this.props.title}</Text>
                    {iconRight}
                </View>
            </TouchableOpacity>
        );
    }
}