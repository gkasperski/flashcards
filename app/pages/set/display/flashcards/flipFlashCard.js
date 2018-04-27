import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card } from 'native-base';
import PropTypes from 'prop-types';
import Colors from '../../../../config/Colors';


const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 300,
    padding: 20,
    justifyContent: 'center',
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: Colors.dark,
    textAlign: 'center',
  },
});

const FlipFlashcard = ({ text }) => (
  <Card style={styles.card}>
    <Text style={styles.cardText}>{text}</Text>
  </Card>
);

FlipFlashcard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FlipFlashcard;
