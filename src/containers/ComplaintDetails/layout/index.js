import {Text, View, StyleSheet} from 'react-native';
import {Layout, Complaints} from '../../../components';
import {colors} from '../../../library/styles/vars';

import React from 'react';

const ComplaintDetails = () => {
  return (
    <Layout backColor="DarkPrimary">
      <View style={styles.container}>
        <Text>HOla</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DiverColor,
    width: '100%',
    flex: 1,
  },
});

export default ComplaintDetails;
