import React from 'react';
import { View, Platform } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { mainColor } from '../styles';
//our import

const TitleBar = ({ text, nav }) => {
        return (
            <View
                flexDirection='row'
                alignItems='center'
                height={64}
                backgroundColor={mainColor}//'#fff'
                elevation={3}
                shadowOffset= {{ height: -1 }}
                shadowColor= 'black'
                shadowOpacity= {0.3}
            >
                <View
                //flex={1}
                >

                </View>
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
                        color: '#fff',
                        }}
                    >{text}</Text>
                </View>
                <View
                    //flex={1}
                    flexDirection='row'
                >
                    <Text
                        style={{
                        fontSize: 20,
                        marginTop: Platform.OS === 'ios' ? 10 : 0,
                        marginLeft: 10,
                        color: '#fff',
                        }}
                    >{nav}</Text>
                    <Icon
                        name='keyboard-arrow-right'
                        type='material-icons'
                        size={24}
                        color='#666'
                        containerStyle={{
                            marginTop: 5,
                            marginRight: 20,
                        }}
                        onPress={() => {
                            Keyboard.dismiss();
                            if (state.inputValue!=='') {
                                addMessage(state.inputValue, true);
                                setInputValue('');
                                getReply(state.inputValue);
                            }                    
                        }}
                    />
                </View>
            </View>
        )
    }

export default TitleBar;