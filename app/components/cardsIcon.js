import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

const cardsIconSrc = require('../images/cards.png');

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    width: 200,
    height: 200,
  },
});

/**
 * Just cards icon used in logo
 */
const CardsIcon = () => (
  <Image resizeMode="contain" style={styles.logo} source={cardsIconSrc} />
);

export default CardsIcon;
