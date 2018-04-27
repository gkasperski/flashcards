import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

const registrationLogoSrc = require('../images/registration.png');

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    width: 300,
    height: 100,
  },
});

/**
 * Registration image with logo
 */
const RegistrationLogo = () => (
  <Image resizeMode="contain" style={styles.logo} source={registrationLogoSrc} />
);

export default RegistrationLogo;
