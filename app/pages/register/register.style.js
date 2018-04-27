import { StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from '../../config/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryBackgroundColor,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 4,
    justifyContent: 'flex-end',
  },
  form: {
    justifyContent: 'center',
    padding: 10,
    flexGrow: 1,
  },
  input: {
    height: 50,
    backgroundColor: Colors.transparentGray,
    marginBottom: 20,
    padding: 15,
    color: Colors.white,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '700',
  },
  buttonContainer: {
    backgroundColor: Colors.success,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
