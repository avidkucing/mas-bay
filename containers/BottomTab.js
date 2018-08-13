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
    changeTab: (number) => dispatch(changeTab(number)),      
})

const MyComponent = ({ state, changeTab, onPress, onPressLeft, onPressRight }) => {
        return (
            <View
                flexDirection='row'
                height={64}
            >
            <View
                flex= {1}
                alignItems= 'center'
                flexDirection='row'
                width={360}
                justifyContent='space-evenly'
                elevation={10}
                shadowOffset= {{ height: -1 }}
                shadowColor= 'black'
                shadowOpacity= {0.3}
                backgroundColor='#fff'
            >
                <Icon
                name={'home'+(state.focusedTab===1 ? '' : '-outline')}
                type='material-community'
                size={state.focusedTab===1 ? 36 : 30}
                color={state.focusedTab===1 ? mainColor : '#666'}
                containerStyle={{
                    marginRight: state.focusedTab===1 ? -6 : 0,
                }}
                onPress={()=>{
                    changeTab(1);
                    onPressLeft();
                }}
                />
                <TouchableOpacity
                    onPress={onPress}
                >
                <Image 
                    source={require('../Man-05.png')}
                    style={{
                        //marginRight: 10,
                        width: 80,
                        height: 80,
                    }}
                    
                />
                </TouchableOpacity>
                <Icon
                name={'person'+(state.focusedTab===2 ? '' : '-outline')}
                type='material-icons'
                size={state.focusedTab===2 ? 36 : 30}
                color={state.focusedTab===2 ? mainColor : '#666'}
                containerStyle={{
                    marginLeft: state.focusedTab===2 ? -6 : 0,
                    //marginRight: 20,
                }}
                onPress={()=>{
                    changeTab(2);
                    onPressRight();
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