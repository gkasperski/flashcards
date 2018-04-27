import { StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from '../../../../config/Colors';

const styles = StyleSheet.create({
  container: {
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
  content: {
    backgroundColor: Colors.dirtyWhite,
    padding: 15,
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flipCard: {
    borderWidth: 0,
    marginTop: 5,
    marginBottom: 5,
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
