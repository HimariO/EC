/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Navigator,
  BackAndroid,
} from 'react-native'

import ViewPagerPage from './Pager'
import LoginPage from './LoginPage'
import EventDetail from './EventDetail'
import CreateEvent from  './CreateEvent'

var _navigator = undefined
var URL = 'http://192.168.43.57:3000/'

BackAndroid.addEventListener('hardwareBackPress', function() {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});


class EC extends Component {

  _router(route, navigator) {
    _navigator = navigator
    console.log(`go~${route.case}`)

    switch (route.case) {

      case 'viewPager':
        return (
          <ViewPagerPage
            page_style={route.part}
            navigator={navigator}
            ssid={route.pass_data.ssid}
            domain={URL}
          />
        )
      break

      case 'event':
        return (<EventDetail/>)
      break

      case 'create_event':
      return (<CreateEvent ssid={route.pass_data.ssid} domain={URL} navigator={navigator}/>)
      break

      case 'chat':
      break

      case 'login':
      default:
      console.log('NO!!!');
        return (
          <LoginPage
            navigator={navigator}
            domain={URL}
            setURL={
              (text)=>{
                URL=text
              console.log("sadasdasdasdsadasdasdasd")
            }}
            />
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{part: 2, case: 'login', pass_data: undefined}}
        renderScene={this._router}
      />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('EC', () => EC);
