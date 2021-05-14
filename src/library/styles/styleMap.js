import {Dimensions, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
  },
  map: {
    flex: 1,
  },
  viewDown: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  inputs: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
  },
});

export default style;
