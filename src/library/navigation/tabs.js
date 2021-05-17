import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import myDen from '../../containers/Home/layout/myDen';
import NewDen from '../../containers/Home/layout/NewDen';
import StackScreen from './stack';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
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
            <Tab.Screen name='Home' component={StackScreen} />
            <Tab.Screen name='ND' component={NewDen} />
            <Tab.Screen name='MD' component={myDen} />
        </Tab.Navigator>
    )
}
