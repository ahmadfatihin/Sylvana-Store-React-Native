import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {HeaderComponent} from '../../components';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <HeaderComponent />
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
