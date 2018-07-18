import React from 'react';
import { View, Image } from 'react-native';
import { Text, Icon } from 'react-native-elements';

const TitleBar = () => {
        return (
            <View 
                style={{
                    flexDirection:'row',
                    elevation: 5,
                    height: 50,
                    width: 360,
                    backgroundColor: '#fabc3d',
                }}
            >
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    }}
                >
                    <Image
                    source= {require('../Man-05.png')}
                    style={{
                        width: 60,
                        height: 60,
                    }}
                    />
                    <Text
                    style={{
                        fontSize: 20,
                        color: '#3e3e3f',
                        fontWeight: 'bold',
                    }}
                    >
                    Mas Bay
                    </Text>
                </View>
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    }}
                >
                    <Text
                    style={{
                        fontWeight: 'bold',
                        color: '#3e3e3f',
                    }}
                    >
                    Menu
                    </Text>
                    <Icon 
                    name='keyboard-arrow-right'
                    type='material-icons'
                    color={'#3e3e3f'}
                    size={36}
                    containerStyle={{
                        marginRight: 10,
                    }}
                    />
                </View>
            </View>
        );
    }

export default TitleBar;