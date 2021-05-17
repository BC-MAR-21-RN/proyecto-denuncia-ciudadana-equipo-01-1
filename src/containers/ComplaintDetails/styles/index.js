import {StyleSheet} from 'react-native';
import {colors} from '../../../library/styles/vars';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkPrimary,
  },
  topSide: {
    flex: 3,
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  botSide: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 4,
    paddingHorizontal: 30,
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
    fontSize: 14,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 9,
    marginVertical: 2,
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  darkTitle: {
    color: colors.SecondaryText,
    fontSize: 15,
    paddingVertical: 20,
  },
  location: {
    color: 'white',
    fontSize: 15,
    paddingVertical: 2,
  },
  separator: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    marginVertical: 15,
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
    lineHeight: 21,
    fontSize: 15,
  },
  image: {
    height: '100%',
    width: 250,
  },
  favButton: {
    position: 'absolute',
    backgroundColor: colors.AccentColor,
    padding: 10,
    borderRadius: 50,
    right: 15,
    top: 15,
    zIndex: 200,
  },
});
