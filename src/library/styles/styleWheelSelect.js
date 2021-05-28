import {StyleSheet} from 'react-native';
import {colors} from './vars';

const WheelStyles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-evenly'},
  text: {
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 15,
    textAlign: 'center',
  },
  pickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    color: colors.purple,
  },
  picker: {width: '80%', height: 250, textAlign: 'center'},
  itemStyle: {color: 'black', fontSize: 26, fontWeight: 'bold'},
});

export default WheelStyles;
