import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import useScreenContent from '../library/hooks/useScreensContent';

export const Stack = createStackNavigator();

export const Screens = () => {
  const {optionsBack, listScreens} = useScreenContent();

  const listRoutes = () => {
    return listScreens.map(item => (
      <Stack.Screen
        key={item.name}
        name={item.name}
        options={
          item.headerLeft || item.headerRight
            ? ({navigation}) =>
                optionsBack(
                  navigation,
                  item.headerLeft,
                  item.headerRight,
                  item.color ? item.color : null,
                  item.title ? item.name : '',
                )
            : {headerShown: false}
        }
        component={item.component}
      />
    ));
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>{listRoutes()}</Stack.Navigator>
    </NavigationContainer>
  );
};
