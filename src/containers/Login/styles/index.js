import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: screenWidth,
  },
  iconContainer: {
    flex: 2,
    width: screenWidth,
    display: 'flex',
    alignItems: 'center',

    justifyContent: 'center',
  },
  logo: {
    height: 100,
    resizeMode: 'contain',
  },
  inputContainer: {
    flex: 4,

    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  messageContaine: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
 
  },
  textArea: {
    color: 'white',
    padding: 0,
    margin: 0,
  },
  underlined:{
textDecorationLine:'underline'
  }
});
export default styles;
