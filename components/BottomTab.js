import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Icon, } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { mainColor } from '../styles';
import { changeTab } from '../actions';



const mapStateToProps = state => ({
    state: state,
})

const mapDispatchToProps = dispatch => ({
    changeTab: (text) => dispatch(changeTab(text)),      
})

const MyComponent = ({ state, changeTab, onPress, onPressLeft, onPressRight }) => {
        return (
            <View
                flexDirection='row'
                height={56}
                width={360}
                elevation={10}
                shadowOffset= {{ height: -2 }}
                shadowColor= 'black'
                shadowOpacity= {0.3}
                backgroundColor='#fff'
            >
            <View
                flex={1}
                justifyContent='center'
                backgroundColor={state.activeTab==='home' ? mainColor : '#fff'}
            >
                <Icon
                    name='home'
                    type='material-community'
                    size={30}
                    color={state.activeTab==='home' ? '#fff' : '#666'}
                    underlayColor='transparent'
                    containerStyle={{

                    }}
                    onPress={()=>{
                        changeTab('home');
                        onPressLeft();
                    }}
                />
            </View>
            <View
                height={64}
                width={64}
                flexDirection='row'
            >
                <View
                    height={64}
                    width={32}
                    backgroundColor={state.activeTab==='home' ? mainColor : '#fff'}
                ></View>
                
                <View
                    height={64}
                    width={32}
                    backgroundColor={state.activeTab==='profil' ? mainColor : '#fff'}
                ></View>
            </View>
            <View
                flex={1}
                justifyContent='center'
                backgroundColor={state.activeTab==='profil' ? mainColor : '#fff'}
            >
                <Icon
                    name='person'
                    type='material-icons'
                    size={state.activeTab==='profil' ? 36 : 30}
                    color={state.activeTab==='profil' ? '#fff' : '#666'}
                    underlayColor='transparent'
                    containerStyle={{

                    }}
                    onPress={()=>{
                        changeTab('profil');
                        onPressRight();
                    }}
                />
            </View>
            <View
                    height={64}
                    width={64}
                    borderRadius={32}
                    position='absolute'
                    left={149}
                    backgroundColor={state.activeTab==='chat' ? mainColor : '#fff'}
                    elevation={5}
                    shadowOffset= {{ height: -1 }}
                    shadowColor= 'black'
                    shadowOpacity= {0.3}
                >
                    <Icon
                        name='robot'
                        type='material-community'
                        color={state.activeTab==='chat' ? '#fff' : '#666'}
                        size={state.activeTab==='chat' ? 36 : 30}
                        underlayColor='transparent'
                        onPress={()=>{
                            changeTab('chat');
                            onPress();
                        }}
                        containerStyle={{
                            marginTop: 10,
                        }}
                    />
                </View>
            </View>
            
        );
    }

const BottomTab = connect(
    mapStateToProps, mapDispatchToProps
)(MyComponent)

export default BottomTab;