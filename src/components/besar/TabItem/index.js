import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeAktif,
  IconProduk,
  IconProdukAktif,
  IconProfile,
  IconProfileAktif,
} from '../../../assets';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }
    if (label === 'Produk') {
      return isFocused ? <IconProdukAktif /> : <IconProduk />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconProfileAktif /> : <IconProfile />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    color: isFocused ? '#FFFFFF' : '#6AB1D7',
    fontSize: 11,
    marginTop: 4,
  }),
});
