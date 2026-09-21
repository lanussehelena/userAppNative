import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import UsersScreen from '../screens/UsersScreen';
import SobreScreen from '../screens/SobreScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Usuários') {
                        iconName = focused ? 'people' : 'people-outline';
                    } else if (route.name === 'Sobre') {
                        iconName = focused ? 'information-circle' : 'information-circle-outline';
                    }

                    return <Ionicons name={iconName as any} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerRight: () => (
                    <Ionicons 
                        name="settings-outline" 
                        size={24} 
                        color="black" 
                        style={{ marginRight: 15 }} 
                    />
                ),
            })}
        >
            <Tab.Screen name="Usuários" component={UsersScreen} />
            <Tab.Screen name="Sobre" component={SobreScreen} />
        </Tab.Navigator>
    );
}
