import {StyleSheet} from 'react-native';
import {colors} from '../../../src/library/styles/vars';
const style = StyleSheet.create({
  reportDetails: {
    marginBottom: 5,
    backgroundColor: colors.White,
    flexDirection: 'row',
    borderRadius: 15,
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  reportInteractions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconSpacing: {
    margin: 5,
    backgroundColor: colors.LightPrimary,
    padding: 8,
    borderRadius: 50,
  },
  detailTextStyle: {
    fontSize: 15,
    color: colors.PrimaryText,
    fontWeight: 'bold',
  },
  detailReportType: {
    color: colors.DarkPrimary,
    fontWeight: 'bold',
    fontSize: 17,
    backgroundColor: colors.LightPrimary,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 2,
    margin: 5,
  },
});

export default style;
