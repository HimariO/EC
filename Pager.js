
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

export default class ViewPagerPage extends Component {
    render() {

      switch (this.props.page_style) {
        case 1:
          return (
            <View style={{flex:1}}>
              <IndicatorViewPager
              style={{height:200}}
              indicator={this._renderDotIndicator()}
              >
                <View style={{backgroundColor:'cadetblue'}}>
                  <Text>page one</Text>
                </View>
                <View style={{backgroundColor:'cornflowerblue'}}>
                  <Text>page two</Text>
                </View>
                <View style={{backgroundColor:'#1AA094'}}>
                  <Text>page three</Text>
                </View>
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
          return (
            <View style={{flex:1}}>
              <IndicatorViewPager
              style={{flex:1}}
              indicator={this._renderTabIndicator()}
              >
                <View style={{backgroundColor:'cadetblue'}}>
                  <Text>page one</Text>
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
      }
    }

    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three', 'four', '5', '6', '7']} />;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }

    _renderTabIndicator() {
        let tabs = [{
                text: 'Home',
                iconSource: require('./img/icons_1.png'),
                selectedIconSource: require('./img/icons_1.png')
            },{
                text: 'Message',
                iconSource: require('./img/icons_1.png'),
                selectedIconSource: require('./img/icons_1.png')
            },{
                text: 'Profile',
                iconSource: require('./img/icons_1.png'),
                selectedIconSource: require('./img/icons_1.png')
        }];
        return <PagerTabIndicator tabs={tabs} />;
    }

}
