import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';

export default class HintButton extends Component {

    render() {
        const options = this.props.options;
        const buttons = options.map((text)=>
            <TouchableOpacity
                //onPress={this.props.onPress}
                key={text}
            > 
                <View
                    style={{
                        backgroundColor: this.props.color,
                        borderRadius: 50,
                        marginLeft: 15,
                        alignSelf: 'flex-start',
                        elevation: 1,
                        marginBottom: 5,
                    }}
                >
                    <Text
                        style={{
                        margin: 10,
                        marginRight: 20,
                        marginLeft: 20,
                        }}
                    >
                        {text}
                    </Text>          
                </View>
            </TouchableOpacity>
        )

        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {buttons}
            </ScrollView>
        );
    }
}