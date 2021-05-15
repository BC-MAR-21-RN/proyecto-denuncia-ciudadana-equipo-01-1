import {Dimensions, StyleSheet} from 'react-native';

import {colors} from './vars';

const screenHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  container: {
    minHeight: screenHeight,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  DarkPrimary: {
    backgroundColor: colors.DarkPrimary,
  },
  containerScroll: {
    flex: 1,
    minHeight: screenHeight,
  },
});
export default style;
