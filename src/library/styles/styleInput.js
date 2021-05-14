import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  conatiner: {
    height: 45,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
    lineHeight: 40,
  },
  input: {
    textDecorationLine: 'none',
    fontSize: 20,
  },
  error: {
    borderColor: 'red',
    borderWidth:2,
    backgroundColor:'#fad9d9'
  },
});
export default style;
