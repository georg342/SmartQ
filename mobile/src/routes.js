import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Queues from './pages/queues';
import Detail from './pages/detail';
//import Home from './pages/home';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Queues" component={Queues} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        
        </NavigationContainer>
    );
}