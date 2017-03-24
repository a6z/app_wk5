import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text
} from 'react-native';
import Footer from './src/component/footer';
import Header from './src/component/header';


const Page2 = () =>{
  const {
    countainer, header, headerText,
    chioce, box, LIVE, RECENT,
    down, imgs,
    footer, footerbox, footerText
                    } = styles;
  return(
    <View style={countainer}>

      <Header />

      <View style={chioce}>
        <View style={[box,{borderBottomWidth: 5, borderBottomColor: '#6441A5'}]}><Text style={LIVE}>LIVE</Text></View>
        <View style={box}><Text style={RECENT}>RECENT</Text></View>
      </View>

      <View style={down}>
        <Image style={imgs} source={require('./src/img/imgFirebat.png')} />
        <Image style={imgs} source={require('./src/img/imgForsen.png')} />
        <Image style={imgs} source={require('./src/img/imgKolento.png')} />
      </View>

      <Footer />

    </View>
  )
}

const styles = {
  countainer: {
    backgroundColor: 'rgb(241, 241, 241)',
    flex: 1,
  },

  chioce: {
    // flex: 1,
    height: 44,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  box : {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  LIVE: {
    fontSize: 13,
    color: '#6441A5',
  },
  RECENT: {
    fontSize: 13,
    color: '#BBB',
  },
  down: {
    alignItems: 'center',
  },
  imgs: {
    marginTop: 5.5,
  },
}

export default Page2; 