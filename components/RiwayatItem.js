import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
//our import
import { styles, backgroundColor, mainColor } from '../styles';


class RiwayatItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isCollapsed: true};
    }

    render() {

    const statusColor=this.props.item.status==='Expired' ? 
    '#ed3f55' : this.props.item.status==='Success' ? '#73d340' : mainColor;
    
    return (
        <TouchableOpacity
            onPress={()=>this.setState((prevState)=>{return {isCollapsed: !prevState.isCollapsed}})}
        >
        <View
            style={{
                width: 360,
                height: this.state.isCollapsed ? 110 : 190,
                alignItems: 'center',
                marginTop: 10,
                overflow: 'hidden',
            }}
        >
            <View
                style={{
                    height: this.state.isCollapsed ? 100 : 180,
                    width: 320,
                    borderRadius: 10,
                    elevation: 5,
                    shadowOffset: { height: 3, width: 2 },
                    shadowColor: 'black',
                    shadowOpacity: 0.3,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        width: 320,
                        backgroundColor: statusColor,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            marginTop: 5,
                            marginBottom: 5,
                            color: '#fff',
                        }}
                    >{this.props.item.fullDate}</Text>
                </View>
                {this.state.isCollapsed ? null : (
                <Text
                    style={{
                        color: statusColor,
                        marginTop: 5,
                    }}
                >{this.props.item.status}</Text>)}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                    }}
                >
                    <Icon
                        name='perm-phone-msg'
                        type='material-icons'
                        size={36}
                        color={mainColor}
                        containerStyle={{
                            margin: 10,
                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                flex: 2,
                                marginLeft: 10,
                            }}
                        >   
                            <Text
                                style={{
                                    fontSize: 14,
                                }}
                            >{this.props.item.operator}</Text>
                            <Text
                                style={{
                                    fontSize: 18,
                                }}
                            >{this.props.item.phone}</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                marginRight: 20,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}
                            >{this.props.item.denom}</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 15,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                marginLeft: 10,
                            }}
                        >   
                            <Text
                                style={{
                                    fontSize: 24,
                                }}
                            >{this.props.item.channel}</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                marginRight: 20,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                }}
                            >Rp{this.props.item.price}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )}
}

export default RiwayatItem;


