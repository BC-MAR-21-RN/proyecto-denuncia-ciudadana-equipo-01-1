import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  PixelRatio,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  FlatList,
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

let MyCompEmpty = [];

let MyComp = [
  {
    id: 1,
    category: 'seguridad',
    title: 'Abuso animal',
    date: '7 de mayo, 2021',
  },
  {
    id: 2,
    category: 'Medio ambiente',
    title: 'Tala clandestina de árboles',
    date: '3 de mayo, 2021',
  },
  {
    id: 3,
    category: 'Transporte',
    title: 'Abuso animal',
    date: '1 de mayo, 2021',
  },
  {
    id: 4,
    category: 'Transporte',
    title: 'Abuso animal',
    date: '1 de mayo, 2021',
  },
  {
    id: 5,
    category: 'Transporte',
    title: 'Abuso animal',
    date: '1 de mayo, 2021',
  },
  {
    id: 6,
    category: 'Transporte',
    title: 'Abuso animal',
    date: '1 de mayo, 2021',
  },
];

const MyComplaints = props => {
  const DotButton = ({icon, onPress, size = 30}) => {
    return (
      <TouchableOpacity style={styles.pressIcon} onPress={onPress}>
        <Icon name={`${icon}`} size={size} color={colors.DarkPrimary} />
      </TouchableOpacity>
    );
  };

  const ComplaintItem = ({category, title, date, id}) => {
    return (
      <View style={styles.cardLayout}>
        <View style={styles.topSection}>
          <View style={styles.leftSide}>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{date}</Text>
          </View>
          <View style={styles.rightSide}>
            <View style={styles.row}>
              <DotButton icon="edit" onPress={onEditPress} />
              <DotButton icon="delete" onPress={onDeletePress} />
              <DotButton icon="info" />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderComplaintItem = (category, title, date, id) => {
    return (
      <ComplaintItem category={category} title={title} date={date} id={id} />
    );
  };

  const sortByDate = array => {
    array.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  };

  const onEditPress = () => {
    Alert.alert('Pantalla de Edición');
  };

  const onDeletePress = () => {
    Alert.alert(
      '¿Borrar esta denuncia?',
      'Tu denuncia se eliminará de manera permanente',
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'Sí, borrar',
        },
      ],
    );
  };

  const EmptyList = () => {
    return (
      <Text style={styles.EmptyMessageText}>
        No tienes denuncias registradas.
      </Text>
    );
  };

  return (
    <View style={styles.layout}>
      <View style={styles.headerSection}>
        <TouchableOpacity>
          <Text style={styles.topText}>Orden: por fecha</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={MyComp}
          renderItem={({item}) =>
            renderComplaintItem(item.category, item.title, item.date, item.id)
          }
          keyExtractor={item => item.id}
          ListEmptyComponent={EmptyList}
        />
      </SafeAreaView>
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

export default MyComplaints;
