import {StyleSheet} from 'react-native';
import {colors} from '../vars';
const styleFormTitleDescription = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5,
    color: colors.SecondaryText,
  },
  descriptionInput: {
    backgroundColor: '#b8b8b8',
    borderBottomColor: colors.DarkPrimary,
    borderBottomWidth: 1,
  },
  containerCheckBox: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  containerDate: {
    padding: 10,
  },
});

export default styleFormTitleDescription;

// DarkPrimary: '#1976D2',
// LightPrimary: '#BBDEFB',
// PrimaryColor: '#2196F3',
// AccentColor: '#FFC107',
// PrimaryText: '#212121',
// SecondaryText: '#757575',
// DiverColor: '#BDBDBD',
