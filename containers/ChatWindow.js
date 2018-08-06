import React from 'react';
import { View, ImageBackground, FlatList } from 'react-native';
import { connect } from 'react-redux';
//our import
import { styles } from '../styles';
import Message from '../components/Message';
import { showHint, hideHint } from '../actions';


const mapStateToProps = state => ({
    state: state,
})

const mapDispatchToProps = dispatch => ({
    showHint: () => dispatch(showHint()),
    hideHint: () => dispatch(hideHint()),
})

const MyView = ({ state, showHint, hideHint }) => {

    _keyExtractor = (item) => item.id;
    
    return (
    <ImageBackground
        //source={require('../bg1.png')}
        style={{
            flex: 1,
        }}
    >
        <View style={styles.chatWindow}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ref={chat => this.chat = chat}
                onContentSizeChange={(contentWidth, contentHeight)=>{        
                    this.chat.scrollToEnd({animated: true});
                }}
                onLayout={(contentWidth, contentHeight)=>{        
                    //if (!state.showHint) 
                    this.chat.scrollToEnd({animated: true});
                }}
                onScrollBeginDrag={()=>{
                    //hideHint();
                }}
                onScrollEndDrag={()=>{
                    //showHint();
                }}
                keyExtractor={this._keyExtractor}
                data={state.messages}
                overScrollMode='never'
                renderItem={({item}) => 
                    <Message
                        key={item.id}
                        text={item.text}
                        isUser={item.isUser}
                        id={item.id}
                    /> 
                }
            />
        </View>
    </ImageBackground>
)}

const ChatWindow = connect(
    mapStateToProps, mapDispatchToProps
)(MyView)

export default ChatWindow;