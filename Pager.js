
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

import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'

import SchListCard from './OneDaySch'
import CourseTable from './Table'
import EventList from './EventScene'


export default class ViewPagerPage extends Component {
    static propTypes = {
      navigator: React.PropTypes.any.isRequired,
      ssid: React.PropTypes.string,
      domain: React.PropTypes.string.isRequired,
    }

    state = {

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
                <View style={{backgroundColor:'#1AA094'}}>

                   <CourseTable domain={this.props.domain} navigator={this.props.navigator} ssid={this.props.ssid}/>
                </View>

                <View style={{backgroundColor:'rgb(75, 193, 237)'}}>
                  <EventList navigator={this.props.navigator} ssid={this.props.ssid} domain={this.props.domain} ref="event_list"/>

                  <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={()=>{this.props.navigator.push({case: 'create_event', pass_data: {ssid:this.props.ssid}})}}>
                      <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Popular" onPress={() => {
                      this.refs.event_list._sortData('popular')
                    }}>
                      <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                      <Icon name="md-done-all" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                  </ActionButton>
                </View>

                <ScrollView style={{backgroundColor:'#BA6014'}}>
                  <SchListCard/>
                  <SchListCard/>
                  <SchListCard/>
                  <SchListCard/>
                </ScrollView>
              </IndicatorViewPager>
            </View>
          );
          break

      }
    }

    _renderTitleIndicator() {
        return (
          <PagerTitleIndicator
            titles={['Table', 'Event', 'Chat']}
            style={{
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: '#FFF',
              height: 50
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
                backgroundColor: '#A48612',
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

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
