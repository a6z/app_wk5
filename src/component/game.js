import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView
} from 'react-native';

const Game = () =>{
    const {
     imgStyle,countainer
                    } = styles;

  return(
    <ScrollView contentContainerStyle={countainer}>
      <Image style={imgStyle} source={require('../img/img_leagueoflegends.png')} />
      <Image style={imgStyle} source={require('../img/img_counterstrike.png')} />
      <Image style={imgStyle} source={require('../img/img_hearthstone.png')} />
      <Image style={imgStyle} source={require('../img/img_dota2.png')} />
      <Image style={imgStyle} source={require('../img/img_h1z1.png')} />
      <Image style={imgStyle} source={require('../img/img_destiny.png')} />
    </ScrollView>
  )
}

const styles = {
    imgStyle: {
      width: 180,
      height: 180,
      marginBottom: 5,
    },
    countainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 5,
    }
}


export default Game;