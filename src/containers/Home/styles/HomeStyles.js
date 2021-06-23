import {StyleSheet} from 'react-native';
import {colors} from '../../../../src/library/styles/vars';
const style = StyleSheet.create({
  reportList: {
    backgroundColor: colors.DarkPrimary,
    flexGrow: 0,
    height: '70%',
  },
  homeContainer: {
    flex: 1,
    padding: 10,
    alignContent: 'flex-start',
    backgroundColor: colors.DarkPrimary,
  },
  homeTitle: {
    fontSize: 20,
    paddingVertical: 10,
    color:'#FFFFFF',
  },
  homeTextStyle:{
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    alignItems: 'flex-end',
  },
  viewTitle: {flexDirection: 'row', alignItems: 'center'},

});

export default style;
