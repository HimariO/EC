
import React, { Component } from 'react';


import {
  TouchableHighlight,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ToolbarAndroid,
  Image,
} from 'react-native'

import {
  MKTouchable,
  MKButton,
  getTheme,
  MKColor,
  MKIconToggle,
} from 'react-native-material-kit'

const theme = getTheme()

const ColoredRaisedButton = MKButton.coloredButton()
  .withText('BUTTON')
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();


export default class OneDaySchList extends Component {
    getInitialState() {
      return ({

      })
    }

    render() {

    }
}

export default class SchListCard extends Component {

  render() {
    var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';
    var action = (<Text> My action</Text>);
    var menu = (
       <MKIconToggle
        checked={true}
        onCheckedChange={this._onIconChecked}
        onPress={this._onIconClicked}
        >
        <Text pointerEvents="none"
              >Off</Text>
        <Text state_checked={true}
              pointerEvents="none"
              >On</Text>
      </MKIconToggle>
    );

    return (
      <View style={{
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: 'rgb(85, 200, 255)',
        padding: 20
      }}>
        <View style={theme.cardStyle}>
          <Image source={{uri : base64Icon}} style={theme.cardImageStyle} />
          <Text style={theme.cardTitleStyle}>Welcome</Text>
        </View>
          <View  // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
            style={{
              padding : 15,
              backgroundColor: '#ffffff'
            }}
            >
            <Text style={[theme.cardContentStyle, {padding:0}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
            </Text>


            <View style={theme.cardActionStyle}>
              <Text>My Action</Text>
            </View>
          </View>

          <View style={theme.cardMenuStyle}>{menu}</View>
      </View>
    );
  }
}
