import {StyleSheet} from 'react-native';

const IconButtons = StyleSheet.create({
  container: {
    zIndex: 1,
    marginHorizontal: 10,
  },
  userIcon: {
    width: 35,
    height: 35,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
  },
  backIcon: {marginHorizontal: 10},
  buttonsContainer: {
    zIndex: 1,
    position: 'absolute',
    minWidth: 150,
    right: 0,
    top: 40,
    borderRadius: 10,
    backgroundColor: 'black',
    padding: 10,
  },
  text: {fontSize: 20, color: 'white'},
});

export default IconButtons;
