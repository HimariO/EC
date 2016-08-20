
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

const window = Dimensions.get('window')

var PULLDOWN_DISTANCE = 40 // pixels


export default class EventDetail extends Component {

  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    }

    this._fetchData = this._fetchData.bind(this)
  }


  componentDidMount() {
    this._fetchData()
  }


  _fetchData () {

  }


  render() {
    return (
        <View style={{flexDirection: 'row'}}>
          <ScrollView style={{flex:1}}>
            <Text style={{fontSize: 70}}>Mon</Text>
            <Text style={{backgroundColor: 'rgb(4, 249, 183)', height: 80}}></Text>
            <Text style={{backgroundColor: '#fff', height: 80}}></Text>
            <Text style={{backgroundColor: 'rgb(4, 249, 183)', height: 80}}></Text>
            <Text style={{backgroundColor: '#fff', height: 80, fontSize: 40}}>3 th</Text>
            <Text style={{backgroundColor: 'rgb(4, 249, 183)', height: 80}}></Text>
            <Text style={{backgroundColor: '#fff', height: 80}}></Text>
            <Text style={{backgroundColor: 'rgb(4, 249, 183)', height: 80}}></Text>
            <Text style={{backgroundColor: '#fff', height: 80}}></Text>
          </ScrollView>
          <ScrollView style={{flex:2, backgroundColor: 'rgb(112, 112, 112)'}}>
                  <Text>Event Title </Text>
                  <Text>
                  Descroption Descroption Descroption
                  Descroption Descroption Descroption
                  Descroption Descroption Descroption
                  </Text>
          </ScrollView>
        </View>
    );
  }
}




var styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: window.width/5,
    height: 100,
    backgroundColor: "#ffffff",
    borderColor: 'rgb(66, 198, 255)',
    borderWidth: 0.5,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  eventRow: {
    margin: 2,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderRadius: 3,
  },
  thumbnail: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
