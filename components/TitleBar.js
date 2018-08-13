import React from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { mainColor } from '../styles';
//our import

const TitleBar = ({ text, onPress }) => {
        return (
            <View
                flexDirection='row'
                alignItems='center'
                height={Platform.OS==='ios' ? 74 : 64}
                width={Platform.OS==='ios' ? 375 : 360}
                backgroundColor='#fff'
                elevation={3}
                shadowOffset= {{ height: -1 }}
                shadowColor= 'black'
                shadowOpacity= {0.3}
            >
                <TouchableOpacity
                    onPress={() => {
                        onPress();                   
                    }}
                >
                    <Icon
                        name='keyboard-arrow-left'
                        type='material-icons'
                        size={30}
                        color='#333'
                        containerStyle={{
                            marginTop: Platform.OS==='ios' ? 15 : 5,
                            marginLeft: 10,
                        }}
                        
                    />
                </TouchableOpacity>
                <View
                    flex={1}
                    alignItems='flex-start'
                >
                    <Text
                        style={{
                        fontWeight: 'bold',
                        fontSize: 24,
                        marginTop: Platform.OS === 'ios' ? 10 : 0,
                        marginLeft: 10,
                        color: '#333',
                        }}
                    >{text}</Text>
                </View>
                <View
                    //flex={1}
                    flexDirection='row'
                >
                
                </View>
            </View>
        )
    }

export default TitleBar;