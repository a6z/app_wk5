import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

const Search = () =>{
    const {
     header, headerText,Sbox,img_search,img_cast
                    } = styles;

  return(
    <View style={header}>
        <View style={Sbox}>
          <Image style={img_search} source={require('../img/icon_search.png')} />
          <Text style={headerText}>Search</Text>
        </View>
        
        <Image style={img_cast} source={require('../img/btn_cast.png')} />
    </View>
  )
}

const styles = {
    header: {
    backgroundColor: '#6441A5',
    height: 64,
    padding: 8.5,
    paddingTop: 26.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Sbox: {
    backgroundColor: 'rgb( 49, 31, 83 )',
    width: 320,
    height: 30,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img_search: {
    marginLeft: 8.5,
    width: 18,
    height: 18
  },
  headerText: {
    marginLeft: 5.5,
    fontSize: 15,
    textAlign: 'left',
    color: 'rgb(185 ,163 ,227)',
  },
  img_cast:{
    width: 33,
    height: 33,
  }
}


export default Search;