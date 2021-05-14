import {Text, View, StyleSheet, Image} from 'react-native';

import React from 'react';

const Complaints = props => {
  return (
    <View>
      <Image source={{uri: props.uri}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: 250},
  image: {
    width: 150,
    height: '50%',
    marginRight: 20,
    borderRadius: 10,
  },
});

export default Complaints;
