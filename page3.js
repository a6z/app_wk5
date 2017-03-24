import React from 'react';
import {
  View
} from 'react-native';
import Footer from './src/component/footer';
import Search from './src/component/search';
import Game from './src/component/game';

const Page3 = () => {
  const { countainer } = styles;
  return(
    <View style={ countainer }>
      <Search />
      <Game />
      <Footer />
    </View>
  )
}

const styles = {
  countainer: {
    backgroundColor: 'rgb(241, 241, 241)',
    flex: 1,
  },
}

export default Page3; 