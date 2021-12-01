import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconKeranjang, IconBack, IconSubmit} from '../../../assets';

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
    <TouchableOpacity>
      <Icon />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
