import {StyleSheet} from 'react-native';
import {colors} from '../../../library/styles/vars';
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.LightPrimary,
  },
  inputTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'stretch',
    margin: 10,
    padding: 5,
  },
  titleText: {
    color: colors.DarkPrimary,
    textAlign: 'center',
    fontSize: 25,
    margin: 10,
  },
  button: {
    backgroundColor: colors.DarkPrimary,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default style;
