import {StyleSheet} from 'react-native';
import {colors} from '../../../library/styles/vars';
import {Dimensions, Platform, PixelRatio} from 'react-native';

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
    width: '100%',
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
  topText: {
    color: 'white',
    fontSize: normalize(15),
  },
  EmptyMessageText: {
    color: 'white',
    fontSize: normalize(18),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  listContainer: {
    flex: 1,
  },
  //
});
