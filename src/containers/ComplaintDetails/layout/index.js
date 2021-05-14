import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {Layout, EvidenceImageItem} from '../../../components';
import {colors} from '../../../library/styles/vars';

import React, {Component} from 'react';

import ImageView from 'react-native-image-viewing';

const images = [
  {
    id: 0,
    uri:
      'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
  },
  {
    id: 1,
    uri:
      'https://cdn.pixabay.com/photo/2021/02/23/14/15/dog-6043585_960_720.jpg',
  },
  {
    id: 2,
    uri:
      'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_960_720.jpg',
  },
  {
    id: 3,
    uri:
      'https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760_960_720.jpg',
  },
];

class ComplaintDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }
  render() {
    return (
      <Layout backColor="DarkPrimary">
        <View style={styles.container}>
          <View style={styles.navigation} />
          {this.infoSection()}
          {this.evidenceGallery()}
          <ImageView
            images={images}
            imageIndex={0}
            visible={this.state.visible}
            onRequestClose={() => this.setState({visible: false})}
          />
        </View>
      </Layout>
    );
  }

  evidenceGallery() {
    return (
      <SafeAreaView style={styles.infoSection}>
        <View style={styles.element}>
          <Text style={styles.tile}>Evidencia:</Text>
        </View>
        <FlatList
          data={images}
          renderItem={({item}) => <EvidenceImageItem uri={item.uri} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </SafeAreaView>
    );
  }

  infoSection() {
    return (
      <View style={styles.infoSection}>
        <View style={styles.element}>
          <Text style={styles.tile}>Área: </Text>
          <Text style={styles.description}>Seguridad</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.element}>
          <Text style={styles.tile}>Registro: </Text>
          <Text style={styles.description}>06/05/21</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.element}>
          <Text style={styles.tile}>Ocurrido: </Text>
          <Text style={styles.description}>06/05/21</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.doubleElement}>
          <Text style={styles.tile}>Ubicación: </Text>
          <Text style={styles.description}>
            Jalisco, Tlatomulco de Zúñiga, 45879, Hacienda Los Fresnos, Av. Los
            Fresnos #345
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.doubleElement}>
          <Text style={styles.tile}>Descripción: </Text>
          <Text style={styles.description}>
            En la colonia existe maltrano animal por parte de un vecino ubicado
            en la calle prados #435, los mantiene encerrados y sin alimento
          </Text>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
}

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
