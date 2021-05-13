import { Login, SignUp, Home } from './src/containers';

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useGoogleConfiguration } from './src/library/hooks';
import { withRedux } from './src/library/redux';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './src/library/navigation/tabs';
import firebase from '@react-native-firebase/app';

const Stack = createStackNavigator();

const App = () => {
  useGoogleConfiguration();
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    {/* firebase.auth().onAuthStateChanged(user => {
      user ? setLoggedin(true) : setLoggedin(false)
    })*/}
  })

  if (loggedin) {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'SignUp'} component={SignUp} />
      </NavigationContainer>
    )
  }

};

export default withRedux(App);
