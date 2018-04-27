import { StyleSheet } from 'react-native';
import Colors from '../../config/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  input: {
    height: 40,
    backgroundColor: Colors.transparentGray,
    marginBottom: 10,
    padding: 10,
    color: Colors.white,
  },
  buttonContainer: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 15,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default styles;
