import React from 'react';
import {View} from 'react-native';
import {useGoogleConfiguration} from './src/library/hooks';
import {withRedux} from './src/library/redux';
import Ubication from './src/containers/Ubication/layout';

const App = () => {
  useGoogleConfiguration();
  return (
    <View>
      <Ubication />
    </View>
  );
};

export default withRedux(App);
