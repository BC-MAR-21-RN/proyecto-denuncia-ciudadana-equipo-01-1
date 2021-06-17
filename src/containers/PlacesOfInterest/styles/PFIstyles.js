import { StyleSheet } from 'react-native';
import { colors } from '../../../library/styles/vars';
const style = StyleSheet.create({
    Maincontainer: {
        flex: 1,
        backgroundColor: colors.LightPrimary
    },
    card: {
        backgroundColor: colors.DarkPrimary,
        borderRadius: 15,
        padding: 10,
        margin: 10,
    },
    cardText: {
        color: colors.White,
        fontSize: 22
    },
    cardTextAlignment: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonsCardAlignment: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 8,
    },
    cardIcon: {
        backgroundColor: colors.White,
        borderRadius: 50,
        padding: 5,
        margin: 10
    },
    IconText: {
        color: colors.DarkPrimary,
        fontSize: 22
    },
    topButton: {
        backgroundColor: colors.DarkPrimary,
        margin: 10,
        padding: 10,
        borderRadius: 15,
        alignItems: 'center'
    },

});

export default style;
