import React from 'react';
import {Animated, View, Text, TouchableOpacity} from 'react-native';

function AppHeader(props: {backgroundColor: any}) {
  return (
    <Animated.View
      style={{
        height: 60,
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
      }}>
      <Animated.View
        style={{
          height: 35,
          width: 35,
          borderRadius: 17.5,
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            borderRadius: 17.5,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black'}}>A</Text>
        </TouchableOpacity>
      </Animated.View>
      {/* <Text>Left</Text> */}
      <Text>Home</Text>
      <Text>Right</Text>
    </Animated.View>
  );
}

export default AppHeader;
