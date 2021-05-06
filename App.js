import {Button, StyleSheet, Text, View} from 'react-native';
import {useGoogleAuth, useGoogleConfiguration} from './src/library/hooks';

import React from 'react';

const App = () => {
  useGoogleConfiguration();

  return <View></View>;
};

export default App;

const styles = StyleSheet.create({});
