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
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftSide}>
          <Text style={styles.category}>Seguridad</Text>
          <Text style={styles.title}>Abuso Animal</Text>
          <Text style={styles.text}>Registro 7 de mayo, 2021</Text>
        </View>
        <View style={styles.rightSide}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.icon}>
              <Icon
                name={'border-color'}
                size={30}
                color={colors.DarkPrimary}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Icon name={'delete'} size={30} color={colors.DarkPrimary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  container: {
    flex: 1,
    backgroundColor: colors.DarkPrimary,
  },
  card: {
    height: 150,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  leftSide: {
    flex: 1,
    justifyContent: 'center', //Centered vertically
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  rightSide: {
    flex: 1,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center',
  },
  category: {
    color: colors.DarkPrimary,
    fontWeight: 'bold',
    fontSize: normalize(14),
    backgroundColor: colors.LightPrimary,
    borderRadius: 50,
    paddingVertical: normalize(4),
    paddingHorizontal: normalize(9),
    marginVertical: normalize(2),
    textAlign: 'center',
  },
  title: {
    color: colors.SecondaryText,
    fontSize: normalize(20),
    fontWeight: 'bold',
    paddingVertical: 3,
  },
  details: {
    flexDirection: 'row',
  },
  text: {
    color: colors.SecondaryText,
  },
  buttonsContainer: {
    backgroundColor: colors.LightPrimary,
    paddingVertical: 15,
    borderRadius: 15,
    flexDirection: 'row',
  },
  icon: {
    paddingHorizontal: 15,
  },
  //
  topSide: {
    flex: 3,
    paddingHorizontal: normalize(20),
    paddingBottom: normalize(20),
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  botSide: {
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
    flex: 4,
    paddingHorizontal: normalize(30),
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  evidence: {
    flex: 2,
    backgroundColor: 'white',
  },
  area: {
    color: colors.DarkPrimary,
    fontWeight: 'bold',
    fontSize: normalize(14),
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: normalize(4),
    paddingHorizontal: normalize(9),
    marginVertical: normalize(2),
    textAlign: 'center',
  },

  darkTitle: {
    color: colors.SecondaryText,
    fontSize: normalize(15),
    paddingVertical: normalize(20),
  },
  location: {
    color: 'white',
    fontSize: normalize(15),
    paddingVertical: normalize(2),
  },
  separator: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    marginVertical: normalize(15),
  },
  userDet: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    height: '50%',
  },
  descriptionText: {
    color: colors.PrimaryText,
    lineHeight: normalize(21),
    fontSize: normalize(15),
  },
  image: {
    height: '100%',
    width: 250,
  },
  favButton: {
    position: 'absolute',
    backgroundColor: colors.AccentColor,
    padding: normalize(10),
    borderRadius: 50,
    right: normalize(15),
    top: normalize(15),
    zIndex: 200,
  },
});

export default MyComplaints;
