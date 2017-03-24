import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

const Footer = () => {
  const {
    footer, footerbox, footerText
                    } = styles;
  return(
    <View style={footer}>
            <View style={footerbox}>
              <Image source={require('../img/btnGamesSelected_2017-03-24/btnGamesSelected.png')} />
              <Text style={[footerText, {color:'#6441A5'}]}>Games</Text>
              </View>
            <View style={footerbox}>
              <Image source={require('../img/btnChannels_2017-03-24/btnChannels.png')} />
              <Text style={footerText}>Channels</Text>
            </View>
            <View style={footerbox}>
              <Image source={require('../img/btnFollowing_2017-03-24/btnFollowing.png')} />
              <Text style={footerText}>Following</Text>
            </View>
            <View style={footerbox}>
              <Image source={require('../img/btnMe_2017-03-24/btnMe.png')} />
              <Text style={footerText}>Me</Text>
            </View>
      </View>
    )
}

const styles= { 
  footer: {
      position:'absolute',
      bottom: 0,
      flexDirection: 'row',
      flex: 1,
      height: 49,
      borderTopWidth: 0.5,
      borderTopColor:'rgb(187, 187, 187)',
      justifyContent: 'space-around',
      backgroundColor: 'white',
    },
    footerbox: {
      flexDirection: 'column',
      alignItems: 'center',
      // flex: 1,
      // justifyContent: 'space-around',
    },

    footerText: {
      position: 'absolute',
      fontSize: 10,
      // justifyContent: 'space-around',
      color: 'rgb(187, 187, 187)',
      zIndex: 2,
      bottom: 1,
    }
}

export default Footer;