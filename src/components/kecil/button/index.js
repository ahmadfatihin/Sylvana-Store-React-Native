import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconKeranjang, IconBack, IconSubmit} from '../../../assets';
import {colors} from '../../../utils';

const Button = ({icon}) => {
  const Icon = () => {
    if (icon === 'keranjang') {
      return <IconKeranjang />;
    } else if (icon === 'arrow-left') {
      return <IconBack />;
    } else if (icon === 'submit') {
      return <IconSubmit />;
    }

    return <IconKeranjang />;
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
  },
});
