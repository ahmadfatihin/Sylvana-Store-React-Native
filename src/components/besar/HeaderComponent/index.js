import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors, responsiveHeight} from './../../../utils';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <TextInput placeholder="Cari Produk..." style={styles.input} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor: colors.primary, height: responsiveHeight(125)},
  searchSection:{
    backgroundColor= colors.white
  }
  input: {
    fontSize: 16,
  },
});
