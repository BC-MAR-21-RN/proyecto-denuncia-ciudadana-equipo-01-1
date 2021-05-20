import {StyleSheet} from 'react-native';
import {colors} from '../../../library/styles/vars';
import normalize from '../../../library/methods/normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkPrimary,
  },
  topSide: {
    flex: 3,
    paddingHorizontal: normalize(20),
    paddingBottom: normalize(20),
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  botSide: {
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
    flex: 4,
    paddingHorizontal: normalize(30),
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  evidence: {
    flex: 2,
    backgroundColor: 'white',
  },
  area: {
    color: colors.DarkPrimary,
    fontWeight: 'bold',
    fontSize: normalize(14),
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: normalize(4),
    paddingHorizontal: normalize(9),
    marginVertical: normalize(2),
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: normalize(36),
    fontWeight: 'bold',
  },
  darkTitle: {
    color: colors.SecondaryText,
    fontSize: normalize(15),
    paddingVertical: normalize(20),
  },
  location: {
    color: 'white',
    fontSize: normalize(15),
    paddingVertical: normalize(2),
  },
  separator: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    marginVertical: normalize(15),
  },
  userDet: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    height: '50%',
  },
  descriptionText: {
    color: colors.PrimaryText,
    lineHeight: normalize(21),
    fontSize: normalize(15),
  },
  image: {
    height: '100%',
    width: 250,
  },
  favButton: {
    position: 'absolute',
    backgroundColor: colors.AccentColor,
    padding: normalize(10),
    borderRadius: 50,
    right: normalize(15),
    top: normalize(15),
    zIndex: 200,
  },
});
