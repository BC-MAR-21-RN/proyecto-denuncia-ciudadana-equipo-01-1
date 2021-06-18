import {StyleSheet} from 'react-native';
import {colors} from './vars';

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    backgroundColor: '#21252B',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    minWidth: 200,
  },
  textModal: {
    color: colors.LightPrimary,
    marginTop: 10,
  },
});
export default style;
