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

import AwesomeButton from 'react-native-awesome-button';


export default class LoginPage extends Component{
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this._login = this._login.bind(this)
  }

  _login(){
    fetch("http://192.168.43.57:3000/logins", {
        method: "POST",
        headers: {},
        body: JSON.stringify({
          user_name: this.username,
          user_pass: this.pass,
          credit_curr: 111,
        })
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData)

        if(responseData.message == 'login!' || responseData.message == 'registered'){
          this.props.navigator.push({
            part: 2,
            case: 'viewPager',
            pass_data: {
              ssid: responseData.user_id
            }
          })
        }

    })
    .done();
  }


  render(){
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image source={require('./img/Logo.png')}/>
        <TextInput
          style={{width:200}}
          placeholder="UserName"
          onChangeText={(text)=>{
            this.username = text
          }}
        />
        <TextInput
          style={{width:200}}
          placeholder="PassWord"
          onChangeText={(text)=>{
            this.pass = text
          }}
        />

        <View style={{flexDirection: 'row', width: 200, marginTop: 5}} >
        <AwesomeButton states={{
                default: {
                  text: 'Press me',
                  onPress: this._login,
                  backgroundColor: '#1155DD'
                }
               }}/>
               </View>
      </View>
    )
  }
}
