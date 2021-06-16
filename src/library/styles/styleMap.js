import {Dimensions, StyleSheet} from 'react-native';
import {colors} from './vars';

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
  },
  map: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewDown: {
    flex: 2,
    paddingHorizontal: 10,
  },
  inputs: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.SecondaryText,
    marginVertical: 5,
  },
  button: {
    padding: 10,
  },
});

export default style;
