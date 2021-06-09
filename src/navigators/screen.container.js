import {
  AreaAdd,
  DateEventsAdd,
  EvidenceAdd,
  Home,
  LocationAdd,
  Login,
  MyComplaints,
  TitleDescriptionAdd,
} from '../containers';
import {Button} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {authFirebase} from '../library/firebase';
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
    backgroundColor: color ? color : '#B9D7F2',
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
          fill="#3366FF"
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
          color={color ? color : '#B9D7F2'}
        />
      );
    }
  },
});

const listScreens = [
  {name: 'Login', component: Login, headerLeft: false, headerRight: false},
  {name: 'Home', component: TabNavigator, headerLeft: false, headerRight: true},
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
    headerRight: true,
    title: 'My Complaints',
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
