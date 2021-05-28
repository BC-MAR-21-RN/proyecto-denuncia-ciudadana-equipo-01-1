
import React, { useEffect, useState } from 'react';
import { Login } from './src/containers/Login/layouts/index';
import { SignUp } from './src/containers/SignUp/layout/index';
import { useGoogleConfiguration } from './src/library/hooks';
import { withRedux } from './src/library/redux';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './src/library/navigation/tabs';
import firebase from '@react-native-firebase/app';

const Stack = createStackNavigator();


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

  useGoogleConfiguration();
  const [loggedin, setLoggedin] = useState(true);

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>)

};

export default withRedux(App);
