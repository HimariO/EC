
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


export default class EventList extends Component {

  static propTypes = {
    navigator: React.PropTypes.object.isRequired
  }

  state = {
    filter: 't',
    sortBy: 't',
    sortedData: [],
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      data: [{
        userid: 'im test data',
        max_member_number: 0,
        event_name: 'EventName',
        descroption: 'NO Descroption',
        days: 1,
        ch: 1,
        point: 10,
        verity: "abc",
        paretic_number: 0
      }],
      dataSource: ds.cloneWithRows([{
        userid: 'im test data',
        max_member_number: 0,
        event_name: 'EventName',
        descroption: 'NO Descroption',
        days: 1,
        ch: 1,
        point: 10,
        verity: "abc",
        paretic_number: 0
      }])
    }

    this._fetchData = this._fetchData.bind(this)
    this._sortData = this._sortData.bind (this)
    this._openEvent = this._openEvent.bind(this)
    this._renderRow = this._renderRow.bind(this)
  }


  componentDidMount() {
    // this._fetchData()
  }


  _fetchData () {
    var newData = []

    try{
    fetch(this.props.domain + 'search_EC', {
        method: "POST",
        headers: {},
        body: JSON.stringify({
          userid: this.props.ssid,
        })
    })
    .then((response) => response.json())
    .then((responseData) => {

      var temp = this.state.data.slice()
      temp = temp.concat(responseData)

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(temp),
        data: temp
      })

    })
    .done();
    } catch(e) {

    }
  }


  _sortData(sortby){
    var temp = this.state.data.slice()

    temp = temp.concat([{
      userid: 'im test data',
      max_member_number: 0,
      event_name: 'EventName',
      descroption: 'NO Descroption',
      days: 1,
      ch: 1,
      point: 10,
      verity: "abc",
      paretic_number: 0
    }])

    switch(sortby){
      case 'popular':
        temp.sort((a, b)=>{
          return a.descroption - b.descroption
        })
      break
    }

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(temp),
      data: temp
    })
  }


  _openEvent(data){
    this.props.navigator.push({case: 'event', pass_data: {event_data: data}})
  }


  _renderRow(rowData) {
    var daystr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    return (
      <TouchableOpacity style={styles.eventRow} onPress={()=>
        {
          this._openEvent(rowData)
        }
      }>
        <View style={styles.thumbnail}>
          <Image style={{alignSelf: 'stretch'}} source={require('./img/icons_1.png')}/>
        </View>
        <View style={{flex: 4, flexDirection: 'column'}}>
          <Text>{rowData.event_name}</Text>
          <Text>{'time:' + rowData.ch + ' th'}</Text>
          <Text>{'day:' + daystr[rowData.days%6] }</Text>
        </View>
      </TouchableOpacity>
    )
  }


  render() {
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          onEndReached={this._fetchData}
        />

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
