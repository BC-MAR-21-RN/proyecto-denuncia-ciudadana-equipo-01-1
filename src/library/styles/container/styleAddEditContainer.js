import { StyleSheet} from 'react-native';

const AddEditContainer = StyleSheet.create({
  internalContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    textAlign: 'center',
  },
  buttonTouch: {
    borderRadius: 10,
    padding: 10,
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#d0d3d3',
  },
  text: {
    textAlign: 'center',
  },
  textHeader: {fontWeight: 'bold', fontSize: 34, textAlign: 'center'},
});

export default AddEditContainer;
