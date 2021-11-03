import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo, Watermark, Watermarklogo} from '../../assets';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('MainApp');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.pages}>
        <Logo />
        <View style={styles.watermark}>
          <Watermarklogo />
          <Watermark />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  watermark: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 1,
  },
});
