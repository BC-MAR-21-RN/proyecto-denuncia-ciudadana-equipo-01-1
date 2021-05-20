import {Login} from './src/containers';
import React from 'react';
import {useGoogleConfiguration} from './src/library/hooks';
import {withRedux} from './src/library/redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  useGoogleConfiguration();
  return <Login />;
};

export default withRedux(App);
