import {Login, SignUp, ComplaintDetails} from './src/containers';

import React from 'react';
import {View} from 'react-native';
import {useGoogleConfiguration} from './src/library/hooks';
import {withRedux} from './src/library/redux';

const App = () => {
  useGoogleConfiguration();
  return (
    <View>
      <ComplaintDetails />
    </View>
  );
};

export default withRedux(App);
