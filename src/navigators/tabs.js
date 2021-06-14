import {Home, MyComplaints, TitleDescriptionAdd} from '../containers';

import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../library/styles/vars';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabListItems = [
  {
    name: 'Home',
    tabBarLabel: 'Inicio',
    component: Home,
    icon: 'home',
    title: 'Home',
  },
  {
    name: 'MyComplaints',
    tabBarLabel: 'Mis denuncias',
    component: MyComplaints,
    icon: 'folder-shared',
    title: 'My Complaints',
  },
  {
    name: 'TitleDescriptionAdd',
    tabBarLabel: 'Agregar',
    component: TitleDescriptionAdd,
    icon: 'library-add',
    title: 'Title DescriptionAdd',
  },
];

const TabList = () => {
  return TabListItems.map(item => {
    return (
      <Tab.Screen
        name={item.name}
        component={item.component}
        options={{
          tabBarLabel: item.tabBarLabel,
          tabBarIcon: ({focused}) => (
            <Icon
              name={item.icon}
              size={30}
              color={focused ? colors.DarkPrimary : colors.SecondaryText}
            />
          ),
        }}
      />
    );
  });
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: styles.labelStyle,
        style: styles.tabBarOptions,
        activeTintColor: colors.DarkPrimary,
        activeBackgroundColor: colors.LightPrimary,
        inactiveBackgroundColor: 'white',
      }}>
      {TabList()}
    </Tab.Navigator>
  );
};

export const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 15,
    paddingBottom: 10,
  },
  tabBarOptions: {
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default MyTabs;
