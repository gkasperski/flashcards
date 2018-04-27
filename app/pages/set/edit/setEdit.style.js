import { StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from '../../../config/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swipeRow: {
    backgroundColor: Colors.dirtyWhite,
    paddingRight: 0,
  },
  content: {
    backgroundColor: Colors.dirtyWhite,
    padding: 15,
  },
  statusBar: {
    ...Platform.select({
      android: {
        height: StatusBar.currentHeight,
      },
    }),
    backgroundColor: Colors.secondaryBackgroundColor,
  },
  fab: {
    backgroundColor: Colors.success,
  },
  title: {
    fontSize: 26,
    color: Colors.dark,
    fontWeight: 'bold',
    padding: 10,
  },
  cardItemTop: {
    marginBottom: 5,
    marginTop: 5,
    paddingBottom: 0,
  },
  cardItemBottom: {
    paddingTop: 0,
    marginBottom: 5,
    marginTop: 5,
  },
  card: {
    marginBottom: 10,
    marginTop: 10,
  },
  space: {
    marginTop: 50,
  },
  trash: {
    fontSize: 40,
    color: Colors.danger,
  },
});

export default styles;
