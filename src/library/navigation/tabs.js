import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../../containers/Home/layout/index';
import myDen from '../../containers/Home/layout/myDen';
import NewDen from '../../containers/Home/layout/NewDen';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
    return (
      <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='ND' component={NewDen} />
            <Tab.Screen name='MD' component={myDen} />
        </Tab.Navigator>  
    )
}
