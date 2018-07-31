import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { mainColor, backgroundColor } from '../styles/chat';

const mapStateToProps = state => ({
    state:  state,
})

const mapDispatchToProps = dispatch => ({
      
})

const Loading = ({ state }) => {
    const renderLoading = () => { if (state.isLoading) return (
        <View
          flex={1}
          justifyContent='center'
          position='absolute'
          top={0}
          left={0}
          width={360}
          height={480}
          backgroundColor='transparent'
        >
          <ActivityIndicator size='large' color={mainColor} />        
        </View>
    )}
  
    const loading = renderLoading();

    return (
        <View
          flex={1}
          justifyContent='center'
          position='absolute'
          top={0}
          left={0}
          width={360}
          height={480}
        >
            {loading}
        </View>
    );
}

const LoadingIndicator = connect(
    mapStateToProps, mapDispatchToProps
)(Loading)
    
export default LoadingIndicator;