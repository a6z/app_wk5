import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

const Header = () =>{
    const {
    countainer, header, headerText,
                    } = styles;

  return(
    <View style={header}>
        <Image source={require('../img/btnBack.png')} />
        <Text style={headerText}>Hearthstone</Text>
        <Image source={require('../img/btnLike.png')} />
    </View>
  )
}

const styles = {
    header: {
    backgroundColor: '#6441A5',
    height: 64,
    padding: 8.5,
    paddingTop: 30.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: 'white',
  },
}


export default Header;