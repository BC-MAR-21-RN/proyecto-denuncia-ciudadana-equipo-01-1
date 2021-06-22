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
  {name: 'Home', component: TabNavigator, back: false},
  {name: 'MyComplaints', component: MyComplaints, back: true},
  {name: 'UserConfiguration', component: UserConfiguration, back: true},
  {name: 'ComplaintDetails', component: ComplaintDetails, back: true},
  {name: 'TitleDescriptionAdd', component: TitleDescriptionAdd, back: true},
  {name: 'DateEventsAdd', component: DateEventsAdd, back: true},
  {name: 'AreaAdd', component: AreaAdd, back: true},
  {name: 'LocationAdd', component: LocationAdd, back: true},
  {name: 'EvidenceAdd', component: EvidenceAdd, back: true},
  {name: 'Login', component: Login, back: false},
  {name: 'SignUp', component: SignUp, back: false},
  {name: 'PlacesOfInterest', component: PlacesOfInterest, back: true},
  {name: 'addPlaceOfInterest', component: addPlace, back: true},
  {name: 'editPlaceOfInterest', component: editPlace, back: true},

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
