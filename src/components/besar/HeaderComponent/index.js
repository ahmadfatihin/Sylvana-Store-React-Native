import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors, responsiveHeight} from './../../../utils';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.searchSection}>
            <TextInput placeholder="Cari Produk..." style={styles.input} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor: colors.primary, height: responsiveHeight(125)},
  wrapper: {
    marginTop: 15,
    marginHorizontal: 30,
  },
  searchSection: {
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  input: {
    fontSize: 16,
  },
});
