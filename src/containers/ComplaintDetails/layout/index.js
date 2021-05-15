import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {colors} from '../../../library/styles/vars';
import {images} from '../dummyData/data';
import Icon from 'react-native-vector-icons/MaterialIcons';

import React, {useState} from 'react';

import ImageView from 'react-native-image-viewing';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const ComplaintDetails = props => {
  const [visible, setIsVisible] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const ImageList = ({imagesArray}) => {
    return (
      <ScrollView horizontal>
        {imagesArray.map((uri, index) => (
          <TouchableOpacity
            key={`${uri}_${index}`}
            activeOpacity={0.8}
            onPress={() => setIsVisible(true)}>
            <Image source={{uri: uri}} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setIsFav(prevIsFav => !prevIsFav);
          ToastAndroid.showWithGravity(
            `${isFav ? 'Agregado a favoritos' : 'Removido de favoritos'}`,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
          );
        }}
        style={styles.favButton}>
        <Icon
          name={isFav ? 'bookmark-border' : 'bookmark'}
          size={45}
          color="white"
        />
      </TouchableOpacity>
      <View style={styles.topSide}>
        <Text style={styles.area}>Seguridad</Text>
        <Text style={styles.title}>Abuso Animal</Text>
        <Text style={styles.location}>
          Hacienda Los Fresnos, Av. Los Fresnos #345, Jalisco, Tlatomulco de
          Zúñiga
        </Text>
        <View style={styles.separator} />
        <Text style={styles.location}>Ocurrido el 6 mayo, 2021</Text>
      </View>
      <View style={styles.botSide}>
        <Text style={styles.darkTitle}>Descripción</Text>
        <View style={styles.descriptionContainer}>
          <ScrollView>
            <Text style={styles.descriptionText}>{lorem}</Text>
          </ScrollView>
        </View>
        <Text style={styles.darkTitle}>
          Denuncia por José Támara - 5 de mayo, 2021
        </Text>
      </View>
      <SafeAreaView style={styles.evidence}>
        <ImageList imagesArray={images.map(image => image.uri)} />
      </SafeAreaView>
      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
        doubleTapToZoomEnabled={true}
        swipeToCloseEnabled={false}
        delayLongPress={1000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LightPrimary,
  },
  topSide: {
    flex: 3,
    backgroundColor: colors.DarkPrimary,
    paddingHorizontal: 15,
    paddingBottom: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  botSide: {
    flex: 4,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  evidence: {
    flex: 2,
  },
  area: {
    color: colors.DarkPrimary,
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 9,
    marginVertical: 2,
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  darkTitle: {
    color: colors.SecondaryText,
    fontSize: 15,
    paddingVertical: 20,
  },
  location: {
    color: 'white',
    fontSize: 15,
    paddingVertical: 2,
  },
  separator: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    marginVertical: 15,
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
    lineHeight: 21,
    fontSize: 15,
  },
  image: {
    height: '100%',
    width: 250,
  },
  favButton: {
    position: 'absolute',
    backgroundColor: colors.AccentColor,
    padding: 13,
    borderRadius: 50,
    right: 15,
    top: 15,
    zIndex: 200,
  },
  //
});

export default ComplaintDetails;
