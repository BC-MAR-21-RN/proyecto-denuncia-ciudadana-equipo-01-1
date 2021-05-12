import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../../containers/Home/layout/index';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
        </Tab.Navigator>
    )
}
