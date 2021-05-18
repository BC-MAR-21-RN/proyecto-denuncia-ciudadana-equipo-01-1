import {Login, SignUp, MyComplaints} from './src/containers';

import React from 'react';
import {View} from 'react-native';
import {useGoogleConfiguration} from './src/library/hooks';
import {withRedux} from './src/library/redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  useGoogleConfiguration();
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="home">
        <Stack.Screen name="Mis denuncias" component={MyComplaints} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withRedux(App);
