import React from 'react';
import { View, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { Text } from 'react-native-elements';
//our import


const NewsItem = ({ height, width, image, title, subtitle, onPress }) => {
        return (
          <TouchableWithoutFeedback
            onPress={onPress}
          >
          <View
            height={height}
            width={width}
            style={{
              marginTop: 10,
              borderRadius: 25,
              marginBottom: 20,
            }}
            elevation={10}
            shadowOffset= {{ height: 3, width: 5 }}
            shadowColor= 'black'
            shadowOpacity= {0.3}
          >
            <ImageBackground
              source={image}
              style={{
                  flex: 1,
                  width: width,
                  justifyContent: 'flex-end'
              }}
              imageStyle={{
                borderRadius: 25,
              }}
            >
              <View
                backgroundColor='#333333aa'
                //height={100}
                borderBottomLeftRadius={25}
                borderBottomRightRadius={25}
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

export default NewsItem;