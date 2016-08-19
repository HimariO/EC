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

var _navigator = undefined

BackAndroid.addEventListener('hardwareBackPress', function() {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});


class Scene extends Component {

  _handleInput(event){
    console.log(event)
  }

  render() {

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            This is Part {this.props.part}.
          </Text>

          <TouchableHighlight onPress={
            ()=>this.props.navigatForward({part: this.props.part + 1, case: 'default'})
          }>
            <Text>Next One!</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={()=> {
            this.props.navigatForward({part: this.props.part +1, case: 'material_test'})
          }
          }>
            <Text>RN Material Lib!</Text>
          </TouchableHighlight>


          <TouchableHighlight onPress={()=> {
            this.props.navigatForward({part: 1, case: 'viewPager'})
          }
          }>
            <Text>View Pager 1 are Here!</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={()=> {
            this.props.navigatForward({part: 2, case: 'viewPager'})
          }
          }>
            <Text>View Pager 2 are Here!</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={()=> {
            this.props.navigatForward({part: 3, case: 'viewPager'})
          }
          }>
            <Text>View Pager 3 are Here!</Text>
          </TouchableHighlight>

        </View>
      </ScrollView>
    )
  }
}


class EC extends Component {

  _router(route, navigator) {
    _navigator = navigator

    var _navigatBack = ()=>{
      console.log('Back')
      navigator.pop()
    }

    var _navigatForward = (keys)=>{
      console.log('GO');
      navigator.push(keys)
    }

    switch (route.case) {

      case 'viewPager':
        return (
          <ViewPagerPage
            page_style={route.part}
            navigator={navigator}
          />
        )
      break

      case 'default':
      default:
        return (
          <Scene
          navigatBack={_navigatBack}
          navigatForward={_navigatForward}
          part={route.part}
          />
        )
      break;

    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{part: 3, case: 'viewPager'}}
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
