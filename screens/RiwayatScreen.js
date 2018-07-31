import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { styles, backgroundColor, mainColor } from '../styles/chat';
import { getRiwayat } from '../actions';
import TextPrimary from '../components/TextPrimary';

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  getRiwayat: (text) => dispatch(getRiwayat(text)),
})




class Riwayat extends Component {

    _keyExtractor = (item) => item._id;

    componentDidMount() {
        this.props.getRiwayat('');        
    }

    render() {

        const riwayat = this.props.state.riwayat;

        return (
            <View style={styles.rootContainer}>
                <FlatList
                keyExtractor={this._keyExtractor}
                data={riwayat}
                overScrollMode='never'
                renderItem={({item}) => 
                    <View
                        key={item._id}
                        alignItems='center'
                        marginTop={20}
                        marginBottom={30}                        
                    >
                        <View
                            flexDirection='row'
                            alignItems='center'
                            backgroundColor={backgroundColor}
                            height={80}
                        >
                            <View
                                alignItems='center'
                                width={180}
                            >
                                <TextPrimary
                                    text={item.fullDate}
                                    mb={5}
                                />
                                <View
                                    backgroundColor={mainColor}
                                    borderRadius={25}
                                >
                                    <Text
                                        style={{
                                            color: 'black',
                                            margin: 5,
                                            marginLeft: 10,
                                            marginRight: 10,
                                        }}
                                    >{item.status.substr(0,7)}</Text>
                                </View>
                                
                            </View>
                            <View
                                width={180}
                                alignItems='center'
                            >
                                <TextPrimary
                                    text={'Pulsa '+item.denom}
                                    type='bold'
                                    size={24}
                                />
                                <TextPrimary
                                    text={item.phone}
                                />
                            </View>
                        </View>
                    </View>
                }
            />
            </View>
        )
    }
}

const RiwayatScreen = connect(
  mapStateToProps, mapDispatchToProps
)(Riwayat)

export default RiwayatScreen;


