/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Page from './page1';
// import Page from './page2';
// import Page from './page3';


const App = () => {
  return(
      <Page />
  )
}




AppRegistry.registerComponent('app_wk5', () => App);
