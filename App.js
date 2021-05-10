import {Login, SignUp} from './src/containers';
import {View} from 'react-native';

import React from 'react';
import {useGoogleConfiguration} from './src/library/hooks';
import {withRedux} from './src/library/redux';

const App = () => {
  useGoogleConfiguration();
  return (
    <View>
      <Login />
      <SignUp />
    </View>
  );
};

export default withRedux(App);
