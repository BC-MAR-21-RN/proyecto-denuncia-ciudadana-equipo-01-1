import { Login, SignUp, Home } from './src/containers';

import React from 'react';
import { View } from 'react-native';
import { useGoogleConfiguration } from './src/library/hooks';
import { withRedux } from './src/library/redux';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './src/library/navigation/tabs';

const App = () => {
  useGoogleConfiguration();
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default withRedux(App);
