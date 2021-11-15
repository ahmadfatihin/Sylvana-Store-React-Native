import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {colors} from './../../../utils';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Header </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor: colors.primary, height: 125},
});
