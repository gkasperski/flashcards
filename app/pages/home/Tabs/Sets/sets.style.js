import { StyleSheet } from 'react-native';
import Colors from '../../../../config/Colors';

const styles = StyleSheet.create({
  content: {
    padding: 15,
    flex: 1,
    backgroundColor: Colors.dirtyWhite,
  },
  cardHeader: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  setItemsIndicator: {
    fontSize: 11,
    marginLeft: 17,
    fontWeight: '900',
    color: Colors.dark,
    borderBottomWidth: 2,
    borderColor: Colors.success,
  },
  setMenuButton: {
    fontSize: 20,
    color: Colors.dark,
  },
  cardBody: {
    paddingTop: 0,
  },
  setTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark,
  },
});

export default styles;
