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
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  profile: {
    borderRadius: 0,
  },
  editIcon: {
    position: 'absolute',
    padding: 2,
    bottom: 4,
    right: 4,
    backgroundColor: 'white',
    borderRadius: 5,
    color: 'black',
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
