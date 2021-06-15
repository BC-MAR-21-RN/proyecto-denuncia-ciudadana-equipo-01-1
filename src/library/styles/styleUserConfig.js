import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  viewImage: {
    alignItems: 'center',
    height: 120,
    width: 120,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  profile: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  editIcon: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderTopColor: 'white',
    borderBottomColor: 'gray',
  },
  userIcon: {height: 30, width: 30},
});

export default style;
