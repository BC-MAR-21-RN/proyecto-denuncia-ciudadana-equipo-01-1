import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import {Layout} from '../../../components';
import {colors} from '../../../library/styles/vars';
import {images} from '../dummyData/data';

import React, {useState} from 'react';

import ImageView from 'react-native-image-viewing';

const Evidence = props => {
  return (
    <View>
      <Image source={{uri: props.uri}} style={styles.galleryImage} />
    </View>
  );
};

const DetItem = props => {
  return (
    <View style={[props.double ? styles.doubleElement : styles.element]}>
      <Text style={styles.tile}>{props.title}: </Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
};

const Separator = () => {
  return <View style={styles.separator} />;
};

const GalleryList = () => {
  const [visible, setIsVisible] = useState(false);
  return (
    <View style={styles.galleryContainer}>
      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      <FlatList
        data={images}
        renderItem={({item}) => <Evidence uri={item.uri} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
};

const ComplaintDetails = props => {
  return (
    <View style={styles.container}>
      <View style={styles.infoSection} />
      <View style={styles.infoSection2} />
      {/* <View style={styles.infoSection}>
          <DetItem title="Área" description="Seguridad" />
          <DetItem title="Registro" description="06/05/2021" />
          <DetItem title="Ocurrido" description="06/05/2021" />
          <DetItem
            title="Ubicación"
            description="Jalisco, Tlatomulco de Zúñiga, 45879, Hacienda Los Fresnos, Av.
              Los Fresnos #345"
            double="true"
          />
          <DetItem
            title="Descripción"
            description="En la colonia existe maltrano animal por parte de un vecino
              ubicado en la calle prados #435, los mantiene encerrados y sin
              alimento"
            double="true"
          />
        </View>
        <SafeAreaView style={styles.infoSection2}>
          <DetItem title="Evidencia" />
          <GalleryList />
        </SafeAreaView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: colors.LightPrimary,
    borderWidth: 10,
    borderColor: 'red',
  },
  navigation: {
    flex: 1,
    backgroundColor: colors.DarkPrimary,
  },
  infoSection: {
    flex: 6,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
    backgroundColor: 'coral',
  },
  infoSection2: {
    flex: 6,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
    backgroundColor: 'orange',
  },
  galleryContainer: {
    flex: 6,
  },
  galleryImage: {
    width: 250,
    height: '50%',
    marginRight: 20,
  },

  tile: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left',
    fontSize: 15,
  },
  description: {
    flex: 3,
    fontSize: 15,
  },
  element: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  doubleElement: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 2,
  },
  separator: {
    borderBottomWidth: 1,
  },
  image: {
    height: 250,
    width: 250,
    backgroundColor: 'orange',
  },
});

export default ComplaintDetails;
