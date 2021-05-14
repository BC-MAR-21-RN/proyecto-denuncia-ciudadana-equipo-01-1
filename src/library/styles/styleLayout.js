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
    minHeight: screenHeight,
    flex: 1,
  },
  contentStyles: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default style;
