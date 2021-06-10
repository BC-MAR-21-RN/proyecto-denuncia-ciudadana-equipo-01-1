import {
  AreaAdd,
  ComplaintDetails,
  DateEventsAdd,
  EvidenceAdd,
  LocationAdd,
  Login,
  MyComplaints,
  SignUp,
  TitleDescriptionAdd,
} from '../containers';

import {Icon} from 'react-native-eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './tabs';
import {createStackNavigator} from '@react-navigation/stack';

export const Stack = createStackNavigator();
const optionsBack = navigation => ({
  headerTitle: '',
  headerStyle: {
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  },
  headerLeft: () => (
    <Icon
      name="arrow-back-outline"
      width={48}
      height={48}
      fill="#3366FF"
      onPress={() => navigation.goBack()}
    />
  ),
});

const listScreens = [
  {name: 'Home', component: TabNavigator, back: false},
  {name: 'MyComplaints', component: MyComplaints, back: true},
  {name: 'ComplaintDetails', component: ComplaintDetails, back: true},
  {name: 'TitleDescriptionAdd', component: TitleDescriptionAdd, back: true},
  {name: 'DateEventsAdd', component: DateEventsAdd, back: true},
  {name: 'AreaAdd', component: AreaAdd, back: true},
  {name: 'LocationAdd', component: LocationAdd, back: true},
  {name: 'EvidenceAdd', component: EvidenceAdd, back: true},
  {name: 'Login', component: Login, back: false},
  {name: 'SignUp', component: SignUp, back: false},
];

export const Screens = () => {
  const listRoutes = () => {
    return listScreens.map(item => {
      return (
        <Stack.Screen
          key={item.name}
          name={item.name}
          options={
            item.back
              ? ({navigation}) => optionsBack(navigation)
              : {headerShown: false}
          }
          component={item.component}
        />
      );
    });
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>{listRoutes()}</Stack.Navigator>
    </NavigationContainer>
  );
};
