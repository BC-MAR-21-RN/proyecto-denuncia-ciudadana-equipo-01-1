import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../library/styles/vars';
import Icon from 'react-native-vector-icons/MaterialIcons';

let DATA = {
  category: 'seguridad',
  title: 'Abuso Animal',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  date: 'Ocurrido el 6 mayo, 2021',
  location:
    'Hacienda Los Fresnos, Av. Los Fresnos #345, Jalisco, Tlatomulco de Zúñiga',
  author: 'Denuncia por José Támara',
  authorDate: '7 de mayo, 2021',
  fav: false,
};

const MyComplaints = props => {
  const DotButton = ({icon, onPress, size = 30}) => {
    return (
      <TouchableOpacity style={styles.pressIcon}>
        <Icon name={`${icon}`} size={size} color={colors.DarkPrimary} />
      </TouchableOpacity>
    );
  };

  const ComplaintItem = () => {
    return (
      <View style={styles.cardLayout}>
        <View style={styles.topSection}>
          <View style={styles.leftSide}>
            <Text style={styles.category}>Seguridad</Text>
            <Text style={styles.title}>Abuso animal</Text>
            <Text style={styles.text}>Registrado 6 de mayo 2021</Text>
          </View>
          <View style={styles.rightSide}>
            <View style={styles.row}>
              <DotButton icon="edit" />
              <DotButton icon="delete" />
              <DotButton icon="info" />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.layout}>
      <ComplaintItem />
      <ComplaintItem />
      <ComplaintItem />
      <View style={styles.headerSection} />
    </View>
  );
};

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 370;

const normalize = size => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: colors.DarkPrimary,
  },
  cardLayout: {
    height: 150,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 20,
  },
  topSection: {
    flex: 4,
    flexDirection: 'row',
  },
  headerSection: {
    height: 60,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftSide: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  rightSide: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  category: {
    color: colors.DarkPrimary,
    fontWeight: 'bold',
    fontSize: normalize(14),
    backgroundColor: colors.LightPrimary,
    borderRadius: 10,
    paddingVertical: normalize(4),
    paddingHorizontal: normalize(9),
    marginVertical: normalize(2),
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontSize: normalize(20),
    fontWeight: 'bold',
    paddingVertical: 7,
  },
  details: {
    flexDirection: 'row',
  },
  text: {
    color: colors.SecondaryText,
    fontSize: normalize(15),
  },
  buttonsContainer: {
    backgroundColor: colors.LightPrimary,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressIcon: {
    padding: 10,
    backgroundColor: colors.LightPrimary,
    borderRadius: 50,
  },
  separatorY: {
    height: '65%',
    borderLeftWidth: 2,
  },
  buttonText: {
    color: colors.DarkPrimary,
    fontSize: normalize(15),
  },
  //
});

export default MyComplaints;
