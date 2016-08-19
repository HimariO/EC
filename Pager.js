
import React, { Component } from 'react';

import {
  TouchableHighlight,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ToolbarAndroid,
} from 'react-native'

import {
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
  PagerTabIndicator
} from 'rn-viewpager'

import SchListCard from './OneDaySch'
// import Calendar from 'react-native-calendar-android'
import CourseTable from './Table'


export default class ViewPagerPage extends Component {
    static propTypes = {
      navigator: React.PropTypes.any.isRequired,
    }

    state = {
      cells: [
        [
          {name: '計算機組織概論', time: 1, date: 1, type: 'A'},
          {name: 'b', time: 2, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
        ],
        [
          {name: 'a', time: 1, date: 1, type: 'A'},
          {name: 'b', time: 2, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
        ],
        [
          {name: 'a', time: 1, date: 1, type: 'A'},
          {name: 'b', time: 2, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
        ],
        [
          {name: 'a', time: 1, date: 1, type: 'A'},
          {name: 'b', time: 2, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
        ],
        [
          {name: 'a', time: 1, date: 1, type: 'A'},
          {name: 'b', time: 2, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
        ],
        [
          {name: 'a', time: 1, date: 1, type: 'A'},
          {name: 'b', time: 2, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
          {name: 'c', time: 1, date: 1, type: 'A'},
        ],
      ]
    }

    render() {

      switch (this.props.page_style) {
        case 1:
          return (
            <View style={{flex:1}}>
              <IndicatorViewPager
              style={{height:200}}
              indicator={this._renderDotIndicator()}
              >

              </IndicatorViewPager>
            </View>
          );
          break;
        case 2:
          return (
            <View style={{flex:1}}>
              <IndicatorViewPager
              style={{flex:1}}
              indicator={this._renderTitleIndicator()}
              >
                <View style={{backgroundColor:'cadetblue'}}>
                  <SchListCard/>
                </View>
                <View style={{backgroundColor:'cornflowerblue'}}>
                  <Text>page two</Text>
                </View>
                <View style={{backgroundColor:'#1AA094'}}>
                  <Text>page three</Text>
                </View>
                <View style={{backgroundColor:'#1AA054'}}>
                  <Text>page four</Text>
                </View>

                <View style={{backgroundColor:'#BA6014'}}>
                  <Text>page Five</Text>
                </View>
              </IndicatorViewPager>
            </View>
          );
          break

        case 3:
        default:
          var cells = [];

          return (
            <View style={{flex:1}}>
              <IndicatorViewPager
              style={{flex:1}}
              indicator={this._renderTabIndicator()}
              >
                <View style={{backgroundColor:'#1AA094'}}>

                   <CourseTable
                    cells={this.state.cells}
                   />
                </View>

                <View style={{backgroundColor:'#1AA054'}}>
                  <Text>page four</Text>
                </View>

                <View style={{backgroundColor:'#BA6014'}}>
                  <Text>page Five</Text>
                </View>
              </IndicatorViewPager>
            </View>
          );
      }
    }

    _renderTitleIndicator() {
        return (
          <PagerTitleIndicator
            titles={['one', 'two', 'three', 'four', '5', '6', '7']}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: 0x00000020,
              height: 48
            }}
          />
        )
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }

    _renderTabIndicator() {
        let tabs = [{
                text: 'Table',
                size: 20,
                iconSource: require('./img/icons_1.png'),
                selectedIconSource: require('./img/icons_1.png')
            },{
                text: 'Event',
                iconSource: require('./img/icons_1.png'),
                selectedIconSource: require('./img/icons_1.png')
            },{
                text: 'Chat',
                iconSource: require('./img/icons_1.png'),
                selectedIconSource: require('./img/icons_1.png')
        }];
        return <PagerTabIndicator tabs={tabs} />;
    }

}
