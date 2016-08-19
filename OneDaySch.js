
import React, { Component } from 'react';
import { Card, Button } from 'react-native-material-design';

import {
  TouchableHighlight,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ToolbarAndroid,
} from 'react-native'


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
      return (
              <View>
                  <Card>
                      <Card.Media
                          image={<Image source={require('./../img/welcome.jpg')} />}
                          overlay
                      />
                      <Card.Body>
                          <Text>Some text to go in the body.</Text>
                      </Card.Body>
                      <Card.Actions position="right">
                          <Button value="ACTION" />
                      </Card.Actions>
                  </Card>
              </View>
      );
  }
}
