import {StyleSheet} from 'react-native';
import {colors} from './vars';

const style = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  AccentColor: {
    backgroundColor: colors.AccentColor,
  },
});
export default style;
