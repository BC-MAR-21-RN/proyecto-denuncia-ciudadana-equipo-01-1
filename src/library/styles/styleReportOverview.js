import {StyleSheet} from 'react-native';
import {colors} from '../../../src/library/styles/vars';
const style = StyleSheet.create({
  reportContainer: {
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor: '#e6e6e6',
  },

  headerCard: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  reportDetails: {
    marginBottom: 5,
    backgroundColor: colors.White,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 15,
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
    textAlign: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colors.DarkPrimary,
    fontWeight: 'bold',
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
