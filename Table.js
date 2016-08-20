
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

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

const window = Dimensions.get('window')

class CourseBox extends Component{

  static propTypes = {
    data_source: React.PropTypes.object.isRequired,
    notic_table: React.PropTypes.func
  }

  constructor(props){
    super(props)
    this.state = {
      event_name: this.props.data_source.name,
      event_time: this.props.data_source.time, // 0~15 course[0:15, A:D]
      event_type: this.props.data_source.type,
      event_date: this.props.data_source.date, // 1~5 mon to fri.
    }

    this._onPress = this._onPress.bind(this)
  }


  _onPress() {
    this.setState({event_time: 3})
    this.props.notic_table(this.props.data_source)
  }

  render() {
    return (
      <TouchableOpacity style={styles.box} onPress={this._onPress}>
        <Text style={{fontSize: 30}}>{this.props.data_source.name}</Text>
        <Text>{this.props.data_source.type}</Text>
        <Text>{this.props.data_source.time}</Text>
      </TouchableOpacity>
    )
  }
}


class CourseDetail extends Component{
  static propTypes = {
    ob_ref: React.PropTypes.object.isRequired,
  }

  constructor(props){
    super(props)
    this.state = {curr_type: undefined}
    this._setType = this._setType.bind(this)
    this._onFinish = this._onFinish.bind(this)
  }

  _setType(value){
    switch(value){
      case 'Free':
      this.props.ob_ref.type = 0
      this.setState({curr_type: 'Free'})
      break

      case 'Course':
      this.props.ob_ref.type = 1
      this.setState({curr_type: 'Course'})
      break

      case '':
      this.props.ob_ref.type = 2
      this.setState({curr_type: ''})
      break

    }
  }


  _onFinish(){
    //upload data here
    this.props.onClose(this.props.ob_ref)
  }


  render() {
    var type_placeholder = 'Select Type...'
    if(this.state.curr_type)
      type_placeholder = this.state.curr_type

    return (
        <View style={{height: 200, backgroundColor:'rgb(75, 193, 237)'}}>


              <Menu onSelect={this._setType}>
                <MenuTrigger disabled={false} style={styles.menuTrigger}>
                  <Text style={styles.menuTriggerText}>{type_placeholder}</Text>
                </MenuTrigger>
                <MenuOptions style={styles.menuOptions}>
                  <MenuOption value="Free">
                    <Text>Free</Text>
                  </MenuOption>
                  <MenuOption value="Course">
                    <Text>Course</Text>
                  </MenuOption>
                  <MenuOption value="disabled" disabled={true}>
                    <Text style={styles.disabled}>Disabled option</Text>
                  </MenuOption>
                  <View style={styles.divider}/>
                  <MenuOption value={{ message: 'Hello World!' }}>
                    <Text>Option with object value</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>


            <TextInput
            onChangeText={(text)=>{
              this.props.ob_ref.name = text
              placeholder="Event Name..."
            }}
            />


            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={this._onFinish}>
                <Text>OK</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
  }
}


export default class CourseTable extends Component{

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    ssid: React.PropTypes.string,
  }

  state = {
      onDetail: false,
      cells: [
        [
          {name: '', time: 1, date: 1, type: 0},
          {name: '', time: 1, date: 2, type: 0},
          {name: '', time: 1, date: 3, type: 0},
          {name: '', time: 1, date: 4, type: 0},
          {name: '', time: 1, date: 5, type: 0},
        ],
        [
          {name: '', time: 2, date: 1, type: 0},
          {name: '', time: 2, date: 2, type: 0},
          {name: '', time: 2, date: 3, type: 0},
          {name: '', time: 2, date: 4, type: 0},
          {name: '', time: 2, date: 5, type: 0},
        ],
        [
          {name: '', time: 3, date: 1, type: 0},
          {name: '', time: 3, date: 2, type: 0},
          {name: '', time: 3, date: 3, type: 0},
          {name: '', time: 3, date: 4, type: 0},
          {name: '', time: 3, date: 5, type: 0},
        ],
        [
          {name: '', time: 4, date: 1, type: 0},
          {name: '', time: 4, date: 2, type: 0},
          {name: '', time: 4, date: 3, type: 0},
          {name: '', time: 4, date: 4, type: 0},
          {name: '', time: 4, date: 5, type: 0},
        ],
        [
          {name: '', time: 5, date: 1, type: 0},
          {name: '', time: 5, date: 2, type: 0},
          {name: '', time: 5, date: 3, type: 0},
          {name: '', time: 5, date: 4, type: 0},
          {name: '', time: 5, date: 5, type: 0},
        ],
        [
          {name: '', time: 6, date: 1, type: 0},
          {name: '', time: 6, date: 2, type: 0},
          {name: '', time: 6, date: 3, type: 0},
          {name: '', time: 6, date: 4, type: 0},
          {name: '', time: 6, date: 5, type: 0},
        ],
        [
          {name: '', time: 7, date: 1, type: 0},
          {name: '', time: 7, date: 2, type: 0},
          {name: '', time: 7, date: 3, type: 0},
          {name: '', time: 7, date: 4, type: 0},
          {name: '', time: 7, date: 5, type: 0},
        ],
        [
          {name: '', time: 8, date: 1, type: 0},
          {name: '', time: 8, date: 2, type: 0},
          {name: '', time: 8, date: 3, type: 0},
          {name: '', time: 8, date: 4, type: 0},
          {name: '', time: 8, date: 5, type: 0},
        ],[
          {name: '', time: 9, date: 1, type: 0},
          {name: '', time: 9, date: 2, type: 0},
          {name: '', time: 9, date: 3, type: 0},
          {name: '', time: 9, date: 4, type: 0},
          {name: '', time: 9, date: 5, type: 0},
        ],[
          {name: '', time: 10, date: 1, type: 0},
          {name: '', time: 10, date: 2, type: 0},
          {name: '', time: 10, date: 3, type: 0},
          {name: '', time: 10, date: 4, type: 0},
          {name: '', time: 10, date: 5, type: 0},
        ],[
          {name: '', time: 11, date: 1, type: 0},
          {name: '', time: 11, date: 2, type: 0},
          {name: '', time: 11, date: 3, type: 0},
          {name: '', time: 11, date: 4, type: 0},
          {name: '', time: 11, date: 5, type: 0},
        ],
      ]
  }


  constructor(props){
    super(props)
    this._handleBoxPress = this._handleBoxPress.bind(this)
    this._getRowComponent = this._getRowComponent.bind(this)
    this._closeDetail = this._closeDetail.bind(this)
    this._getTable = this._getTable.bind(this)
    this._updateSinge = this._updateSinge.bind(this)
  }


  componentDidMount() {
    this._getTable()
  }


  _getTable(){

      fetch("http://192.168.43.57:3000/lookupclass", {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            user_id: this.props.ssid,
          })
      })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
        for(var line of responseData){
          this.states.cells[line.ch][line.days] = {
            name: line.class_name,
            time: line.ch,
            date: line.days,
            type: line.type,
          }
        }

        this.setState({cells: this.state.cells})
      })
      .done();

  }


  _updateSinge(evnet){

      fetch("http://192.168.43.57:3000/upclass", {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            user_id: this.props.ssid,
            type: event.type,
            class_name: evnet.name,
            days: event.date,
            ch: event.time
          })
      })
      .then((response) => response.json())
      .then((responseData) => {

      })
      .done();

  }


  _handleBoxPress(ob_ref) {
    var detail = <CourseDetail ob_ref={ob_ref} onClose={this._closeDetail}/>
    if(!this.state.onDetail) {
      this.state.cells.splice(ob_ref.time, 0, detail)
      this.setState({onDetail: true, indexDetail: ob_ref.time})
    }
  }


  _closeDetail(event) {
    if(this.state.onDetail) {
      this._updateSinge(event)
      this.state.cells.splice(this.state.indexDetail, 1)
      this.setState({onDetail: false})
    }
  }


  _getRowComponent(rowData) {
    try{
      var row_comps = rowData.map((cell, cell_i)=>{
        return (
          <View style={{flex: 1}} key={cell_i}>
            <CourseBox
              data_source={cell}
              notic_table={this._handleBoxPress}
            />
          </View>
        )
      })

      return (
        <View style={{flexDirection: 'row'}}>
          {row_comps}
        </View>
      )
    }catch(e){
      return (
          rowData
      )
    }
  }


  render() {
    return (
      <ScrollView>
        <MenuContext style={{ flex: 1 }} ref="MenuContext">
        {
          this.state.cells.map((e)=>{
            if(Component.isPrototypeOf(e))
              return e
            return this._getRowComponent(e)
          })
        }
        </MenuContext>
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
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  menuTrigger: {
    borderWidth: 1,
    padding: 1,
    borderColor: '#FFF',
    width:150,
    paddingHorizontal: 5
  },
  menuTriggerText: {
    fontSize: 20
  },
  disabled: {
    color: '#ccc'
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  contentText: {
    fontSize: 18
  },
  dropdown: {
    width: 300,
    borderColor: '#999',
    borderWidth: 1,
    padding: 5
  },
  dropdownOptions: {
    marginTop: 30,
    borderColor: '#ccc',
    borderWidth: 2,
    width: 300,
    height: 200
  }
});
