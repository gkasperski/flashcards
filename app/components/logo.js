import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

const logoImage = require('../images/logo-vocab.png');

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    width: 300,
    height: 100,
  },
});

/**
 * Main logo Image
 */
const Logo = () => (
  <Image resizeMode="contain" style={styles.logo} source={logoImage} />
);

export default Logo;
