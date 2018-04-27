import { StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from '../../config/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dirtyWhite,
    flex: 1,
  },
  statusBar: {
    ...Platform.select({
      android: {
        height: StatusBar.currentHeight,
      },
    }),
    backgroundColor: Colors.secondaryBackgroundColor,
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 21,
    fontWeight: '600',
    padding: 10,
  },
  tabUnderline: {
    backgroundColor: Colors.amber,
  },
  fab: {
    backgroundColor: Colors.success,
  },
});

export const noContentStyle = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: Colors.dirtyWhite,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  icon: {
    fontSize: 120,
    color: Colors.lightGray,
  },
  statement: {
    fontSize: 18,
    fontWeight: '200',
    color: Colors.lightGray,
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default styles;
