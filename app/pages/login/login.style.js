import { StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from '../../config/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryBackgroundColor,
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 40,
    justifyContent: 'flex-end',
  },
  continue: {
    alignItems: 'center',
    flexGrow: 25,
    justifyContent: 'center',
  },
  continueButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(41, 128, 182, 0.2)',
    borderColor: Colors.primaryColor,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    padding: 15,
  },
  continueText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '100',
  },
  textContainer: {
    flexGrow: 1,
    alignItems: 'center',
    marginBottom: 20,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 16,
    includeFontPadding: false,
  },
  signUpText: {
    fontWeight: '600',
    color: Colors.primaryColor,
    fontSize: 17,
  },
});

export default styles;
