import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'powderblue',
  },
  viewContainer: {flex: 1, flexDirection: 'column'},
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  text: {fontSize: 16},
  icons: {flexDirection: 'row'},
});
export default style;
