
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

import AwesomeButton from 'react-native-awesome-button';


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


  _partic() {

  }


  render() {
    var daystr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];


    return (

          <ScrollView style={{flex:2, backgroundColor: 'rgb(112, 112, 112)'}}>
            <View style={[{flexDirection: 'row'}, styles.TopSec]}>
            <Text style={{fontSize: 70}}>{daystr[this.state.data.days%5]}</Text>
            <Text style={{fontSize: 40}}>{this.state.data.ch} th</Text>
            </View>
                  <Text>Event Title </Text>
                  <Text>
                    {this.state.data.descroption}
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 5}} >
                    <Image style={styles.user_thumbnail} source={require('./img/icons_1.png')}/>
                    <Image style={styles.user_thumbnail} source={require('./img/icons_1.png')}/>
                    <Image style={styles.user_thumbnail} source={require('./img/icons_1.png')}/>
                  </View>
                  <View style={{flexDirection: 'row', width: 200, marginTop: 5}} >
                    <AwesomeButton states={{
                          default: {
                            text: 'GO',
                            onPress: this._partic,
                            backgroundColor: 'rgb(151, 222, 95)'
                          }
                         }}/>
                  </View>
          </ScrollView>
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
  TopSec: {
    backgroundColor: '#5adab0',
  },
  user_thumbnail: {
    backgroundColor: '#5adab0',
    height: 100,
    borderRadius: 50,
    width: 100
  },
});
