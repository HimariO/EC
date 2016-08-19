
import React, { Component } from 'react';
import {
  ListView,
  TouchableHighlight,
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

class CourseBox extends Component{

  static propTypes = {
    event_name: React.PropTypes.string.isRequired,
    event_time: React.PropTypes.number.isRequired,
    event_date: React.PropTypes.number.isRequired,
    event_type: React.PropTypes.string,
  }


  render() {

    return (
      <View style={styles.box}>
        <Text style={{fontSize: 30}}>{this.props.event_name}</Text>
        <Text>{this.props.event_type}</Text>
      </View>
    )
  }
}


export default class CourseTable extends Component{

  static propTypes = {
    cells: React.PropTypes.arrayOf(React.PropTypes.array).isRequired,
  }

  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var data = this.props.cells.map((e, i)=>{this._getRowComponent(e)})

    return {
      dataSource: ds.cloneWithRows(data),
    }
  }

  _getRowComponent(rowData) {
    var row_comps = rowData.map((cell, cell_i)=>{
      return (
        <View style={{flex: 1}} key={cell_i}>
          <CourseBox
            event_name={cell.name}
            event_date={cell.date}
            event_type={cell.type}
            event_time={cell.time}
          />
        </View>
      )
    })

    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        {row_comps}
      </View>
    )
  }


  render() {
    return (
      <ScrollView>
        {this.props.cells.map((e)=>this._getRowComponent(e))}
      </ScrollView>
    )
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
  }
});
