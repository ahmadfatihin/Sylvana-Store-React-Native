import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {HeaderComponent} from '../../components/besar';
import {colors} from '../../utils';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
        <HeaderComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
});
