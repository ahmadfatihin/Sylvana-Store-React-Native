import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeAktif,
  IconBaju,
  IconBajuAktif,
  IconProfile,
  IconProfileAktif,
} from '../../../assets';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{flex: 1}}>
      <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({});
