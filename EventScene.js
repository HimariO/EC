
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
  // Initialize the hardcoded data
  state = {
    filter: 't',
    sortBy: 't',
    sortedData: [],
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      data: [{name: 'Name', type: 2, date: 3, time:2}],
      dataSource: ds.cloneWithRows([{name: 'Name', type: 2, date: 3, time:2}])
    }

    this._fetchData = this._fetchData.bind(this)
  }


  componentDidMount() {
    this._fetchData()
  }


  _fetchData () {
    var newData = [
      {name: 'NewName', type: 3, date: 1, time:8},
      {name: 'Name', type: 2, date: 3, time:2},
      {name: 'Name', type: 2, date: 3, time:2},
      {name: 'Name', type: 2, date: 3, time:2},
      {name: 'Name', type: 2, date: 3, time:2},
    ]

    var temp = this.state.data.slice()
    temp = temp.concat(newData)

   this.setState({
     dataSource: this.state.dataSource.cloneWithRows(temp),
     data: temp
   })

   return temp
  }

  _renderRow(rowData) {
    return (
      <View style={styles.eventRow}>
        <View style={styles.thumbnail}>
          <Image style={{alignSelf: 'stretch'}} source={require('./img/icons_1.png')}/>
        </View>
        <View style={{flex: 4, flexDirection: 'column'}}>
          <Text>{rowData.name}</Text>
          <Text>{'type:' + rowData.type}</Text>
          <Text>{'time:' + rowData.time}</Text>
          <Text>{'day:' + rowData.date}</Text>
        </View>
      </View>
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
