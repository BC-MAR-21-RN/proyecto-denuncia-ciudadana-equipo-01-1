import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'powderblue',
  },
  viewContainer: {flex: 1, flexDirection: 'column'},
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {fontSize: 20, fontWeight: 'bold'},
  text: {fontSize: 16, fontWeight: 'bold'},
  icons: {flexDirection: 'row'},
});
export default style;
