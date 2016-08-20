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

var _navigator = undefined

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
            ssid={route.ssid}
          />
        )
      break

      case 'courseDetail':
      break

      case 'chat':
      break

      case 'login':
      default:
      console.log('NO!!!');
        return (
          <LoginPage navigator={navigator}/>
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
