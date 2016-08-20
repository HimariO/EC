import React, { Component } from 'react';
import {
  ListView,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ToolbarAndroid,
  Image,
  Dimensions,
} from 'react-native'

import MKButton from 'react-native-material-kit'

// const CustomButton = new MKButton.Builder()
//   .withBackgroundColor(MKColor.Teal)
//   .withShadowRadius(2)
//   .withShadowOffset({width:0, height:2})
//   .withShadowOpacity(.7)
//   .withShadowColor('black')
//   .withOnPress(() => {
//
//   })
//   .withTextStyle({
//     color: 'white',
//     fontWeight: 'bold',
//   })
//   .withText('LOGIN')
//   .build();


export default class LoginPage extends Component{
  render(){
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image source={require('./img/Logo.png')}/>
        <TextInput placeholder="UserName"/>
        <TextInput placeholder="PassWord"/>
        
      </View>
    )
  }
}
