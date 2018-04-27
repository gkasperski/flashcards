import { StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from '../../../config/Colors';

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
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
    flexGrow: 1,
  },
  cardItem: {
    paddingBottom: 0,
  },
  cardFooter: {
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: 'column',
  },
  createButton: {
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: 'flex-end',
  },
  cancelBtn: {
    position: 'absolute',
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
});

export default styles;
