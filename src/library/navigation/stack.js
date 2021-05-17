import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../../containers/Home/layout'
import { Button } from 'react-native'
const Stack = createStackNavigator();
export default function StackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} 
       
            options={{
                
                headerStyle: { backgroundColor: '#B9D7F2' },
                title: 'Home', headerRight: () => (
                    <Button
                        onPress={() => console.log('Navigation')}
                        title="🧑"
                        color="#B9D7F2"
                    />
                ),
            }} />

        </Stack.Navigator>
    )
}
