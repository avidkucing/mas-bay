import React from 'react';
import { View, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
//our import
import { changeNews } from '../actions';


const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  changeNews: (number) => dispatch(changeNews(number)),      
})

const MyComponent = ({ index, height, width, image, title, subtitle, onPress, changeNews }) => {
  return (
    <TouchableWithoutFeedback
      onPress={()=>{
        changeNews(index);
        onPress();
      }}
      style={{
        flex: 1,
      }}
    >
    <View
      style={{
        flex: 1,
        borderRadius: 5,
        elevation: 5,
        shadowOffset: { height: 2, width: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        marginTop: 5,
        marginBottom: 25,
      }}
    >
      <ImageBackground
        source={image}
        style={{
            flex: 1,
            width: width,
            justifyContent: 'flex-end'
        }}
        imageStyle={{
          borderRadius: 5,
        }}
      >
        <View
          style={{
            backgroundColor: '#333333aa',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 20,
            }}
          >{title}</Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 10,
            }}
          >{subtitle}</Text>
        </View>
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}

const NewsItem = connect(
  mapStateToProps, mapDispatchToProps
)(MyComponent)

export default NewsItem;