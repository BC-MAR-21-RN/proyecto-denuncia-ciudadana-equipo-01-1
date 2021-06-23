import {
  AreaAdd,
  ComplaintDetails,
  DateEventsAdd,
  EvidenceAdd,
  LocationAdd,
  Login,
  MyComplaints,
  TitleDescriptionAdd,
  UserConfiguration,
} from '../containers';

import {Button} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './tabs';
import {authFirebase} from '../library/firebase';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../library/styles/vars';

import PlacesOfInterest from '../containers/PlacesOfInterest/layout';
import addPlace from '../containers/PlacesOfInterest/addPlace';
import editPlace from '../containers/PlacesOfInterest/editPlace';
import SignUp from '../containers/SignUp/layout';

export const Stack = createStackNavigator();
const optionsBack = (
  navigation,
  HLeft,
  HRight,
  color = null,
  title = null,
) => ({
  headerTitle: title ? title : '',
  headerStyle: {
    backgroundColor: color ? color : colors?.LightPrimary,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  },
  headerLeft: () => {
    if (HLeft) {
      return (
        <Icon
          name="arrow-back-outline"
          width={48}
          height={48}
          fill={colors?.DarkPrimary}
          onPress={() => navigation.goBack()}
        />
      );
    }
  },
  headerRight: () => {
    if (HRight) {
      return (
        <Button
          onPress={() => authFirebase.logoutFirebase(navigation.replace)}
          title="🧑"
          color={color ? color : colors?.LightPrimary}
        />
      );
    }
  },
});

const listScreens = [
  {name: 'Login', component: Login, headerLeft: false, headerRight: false},
  {
    name: 'Home',
    component: TabNavigator,
    headerLeft: false,
    headerRight: false,
  },
  {
    name: 'MyComplaints',
    component: MyComplaints,
    headerLeft: false,
    headerRight: true,
    title: 'My Complaints',
  },
  {
    name: 'TitleDescriptionAdd',
    component: TitleDescriptionAdd,
    headerLeft: false,
    headerRight: false,
    title: 'My Complaints',
  },
  {
    name: 'UserConfiguration',
    component: UserConfiguration,
    headerLeft: true,
    headerRight: false,
  },

  {
    name: 'ComplaintDetails',
    component: ComplaintDetails,
    headerLeft: false,
    headerRight: false,
  },
  {
    name: 'DateEventsAdd',
    component: DateEventsAdd,
    headerLeft: true,
    headerRight: false,
    title: 'My Complaints',
  },
  {name: 'AreaAdd', component: AreaAdd, headerLeft: true, headerRight: false},
  {
    name: 'LocationAdd',
    component: LocationAdd,
    headerLeft: true,
    headerRight: false,
  },
  {
    name: 'EvidenceAdd',
    component: EvidenceAdd,
    headerLeft: true,
    headerRight: false,
  },
  {name: 'SignUp', component: SignUp, headerLeft: false, headerRight: false},

  {
    name: 'addPlaceOfInterest',
    component: addPlace,
    headerLeft: false,
    headerRight: true,
  },
  {
    name: 'editPlaceOfInterest',
    component: editPlace,
    headerLeft: false,
    headerRight: true,
  },

  {
    name: 'PlacesOfInterest',
    component: PlacesOfInterest,
    headerLeft: true,
    headerRight: false,
  },
];

export const Screens = () => {
  const listRoutes = () => {
    return listScreens.map(item => {
      return (
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
      );
    });
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>{listRoutes()}</Stack.Navigator>
    </NavigationContainer>
  );
};
