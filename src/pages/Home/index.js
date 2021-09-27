import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Halaman Awal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
