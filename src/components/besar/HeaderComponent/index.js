import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {colors, responsiveHeight} from './../../../utils';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput placeholder="Cari Produk..." />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor: colors.primary, height: responsiveHeight(125)},
});
