import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors, responsiveHeight} from './../../../utils';
import {IconCari} from '../../../assets';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.searchSection}>
            <IconCari />
            <TextInput placeholder="Cari Produk..." style={styles.input} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor: colors.primary, height: responsiveHeight(120)},
  wrapper: {
    marginTop: 18,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingLeft: 11,
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    paddingLeft: 11,
  },
});
