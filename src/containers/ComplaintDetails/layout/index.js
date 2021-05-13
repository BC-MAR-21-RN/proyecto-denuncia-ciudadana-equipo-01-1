import {Text, View, StyleSheet} from 'react-native';
import {Layout, Input} from '../../../components';
import {colors} from '../../../library/styles/vars';

import React from 'react';

const ComplaintDetails = () => {
  return (
    <Layout backColor="DarkPrimary">
      <View style={styles.container}>
        <View style={styles.navigation} />
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
              Jalisco, Tlatomulco de Zúñiga, 45879, Hacienda Los Fresnos, Av.
              Los Fresnos #345
            </Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.doubleElement}>
            <Text style={styles.tile}>Descripción: </Text>
            <Text style={styles.description}>
              En la colonia existe maltrano animal por parte de un becino
              ubicado en la calle prados #435, los mantiene encerrados y sin
              alimento
            </Text>
          </View>
          <View style={styles.separator} />
        </View>
        <View style={styles.infoSection2} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DiverColor,
    flex: 1,
    width: '100%',
  },
  navigation: {
    flex: 1,
  },
  infoSection: {
    flex: 6,
    backgroundColor: 'orange',
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
});

export default ComplaintDetails;
