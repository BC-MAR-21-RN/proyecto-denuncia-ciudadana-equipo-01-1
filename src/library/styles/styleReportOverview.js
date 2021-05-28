import {StyleSheet} from 'react-native';
import {colors} from './vars';

const style = StyleSheet.create({
    reportDetails: {
        backgroundColor: '#B9D7F2',
        flexDirection: 'row',
        borderWidth:1,
        borderColor: 'black',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal:10
    },
    reportInteractions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})

export default style
