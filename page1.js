import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image
} from 'react-native';

const Page1 = () =>{
  const {countainer} = styles;
  return(
    <View style={countainer}>
      <Image source={require('./src/img/logoTwitch.png')} />
    </View>
  )
}

const styles = {
  countainer: {
    backgroundColor: '#6441A5',
    flex: 1,
    paddingTop: 273,
    alignItems: 'center',
  }
}

export default Page1; 