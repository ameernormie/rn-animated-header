import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function LaunchScreen(props) {
  return (
    <View style={{flex: 1, backgroundColor: '#eee'}}>
      <TouchableOpacity onPress={() => props.navigation.navigate('MainStack')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LaunchScreen;
