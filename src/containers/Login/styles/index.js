import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight,
    width: '100%',
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: '80%',
  },
  inputContainer: {
    height: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textWhite: {
    color: 'white',
    fontSize: 18,
  },
  underlined: {
    textDecorationLine: 'underline',
  },
});
export default styles;
