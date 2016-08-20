
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

export default class CreateEvent extends Component {

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    ssid: React.PropTypes.string.isRequired,
    domain: React.PropTypes.string.isRequired,
  }

  state = {

  }

  constructor(props) {
    super(props);

    this._commit = this._commit.bind(this)
  }


  componentDidMount() {

  }


  _commit () {
    fetch(this.props.domain + 'sponer_event', {
        method: "POST",
        headers: {},
        body: JSON.stringify({
          userid: this.props.ssid,
          max_member_number: this.MaxMember,
          event_name: this.EventName,
          descroption: this.Descroption,
          days: this.DayOfTheWeek,
          ch: this.WhichCourse,
          point: this.Point,
          verity: "abc",
          paretic_number: 0
        })
    }).done();

    this.props.navigator.pop()
  }


  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{flexDirection: 'row'}}></View>
        <TextInput
          style={{width:200}}
          placeholder="EventName"
          onChangeText={(text)=>{
            this.EventName = text
          }}
        />
        <TextInput
          style={{width:200}}
          placeholder="Descroption"
          onChangeText={(text)=>{
            this.Descroption = text
          }}
        />
        <TextInput
          style={{width:200}}
          placeholder="MaxMember"
          onChangeText={(text)=>{
            this.MaxMember = text
          }}
        />
        <TextInput
          style={{width:200}}
          placeholder="DayOfTheWeek"
          onChangeText={(text)=>{
            this.DayOfTheWeek = text
          }}
        />
        <TextInput
          style={{width:200}}
          placeholder="WhichCourse"
          onChangeText={(text)=>{
            this.WhichCourse = text
          }}
        />
        <TextInput
          style={{width:200}}
          placeholder="Point"
          onChangeText={(text)=>{
            this.Point = text
          }}
        />

        <View style={{flexDirection: 'row', width: 200, marginTop: 5}} >
          <AwesomeButton states={{
                default: {
                  text: 'Press me',
                  onPress: this._commit,
                  backgroundColor: '#1155DD'
                }
               }}/>
        </View>
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
