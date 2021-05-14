import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
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
  return (
    <FlatList
      data={images}
      renderItem={({item}) => <Evidence uri={item.uri} />}
      keyExtractor={item => item.id}
      horizontal={true}
    />
  );
};

const ComplaintDetails = props => {
  return (
    <Layout backColor="DarkPrimary">
      <View style={styles.container}>
        <View style={styles.navigation} />
        <View style={styles.infoSection}>
          <DetItem title="Área" description="Seguridad" />
          <Separator />
          <DetItem title="Registro" description="06/05/2021" />
          <Separator />
          <DetItem title="Ocurrido" description="06/05/2021" />
          <Separator />
          <DetItem
            title="Ubicación"
            description="Jalisco, Tlatomulco de Zúñiga, 45879, Hacienda Los Fresnos, Av.
              Los Fresnos #345"
            double="true"
          />
          <Separator />
          <DetItem
            title="Descripción"
            description="En la colonia existe maltrano animal por parte de un vecino
              ubicado en la calle prados #435, los mantiene encerrados y sin
              alimento"
            double="true"
          />
          <Separator />
        </View>
        <SafeAreaView style={styles.infoSection}>
          <DetItem title="Evidencia" />
          <GalleryList />
        </SafeAreaView>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    width: '100%',
  },
  navigation: {
    flex: 1,
    backgroundColor: colors.LightPrimary,
  },
  galleryImage: {
    width: 150,
    height: '50%',
    marginRight: 20,
    borderRadius: 10,
  },
  infoSection: {
    flex: 6,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  infoSection2: {
    flex: 6,
    backgroundColor: 'coral',
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
