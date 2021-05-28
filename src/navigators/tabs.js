import {Home, MyComplaints, TitleDescriptionAdd} from '../containers';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 15,
        },
        activeTintColor: 'black',
        activeBackgroundColor: '#8CB4D9',
        inactiveBackgroundColor: '#B9D7F2',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyComplaints" component={MyComplaints} />
      <Tab.Screen name="TitleDescriptionAdd" component={TitleDescriptionAdd} />
    </Tab.Navigator>
  );
};

export default MyTabs;
