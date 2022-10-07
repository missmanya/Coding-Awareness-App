import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ArtificiaIntelligenceandRobotics from "../screens/ArtificiaIntelligenceandRobotics"
import Drones from "../screens/Drones"
import ElectricVehicles from "../screens/ElectricVehicles"
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Artificial Intelligence and Robotics" component={ArtificiaIntelligenceandRobotics}/>
            <Tab.Screen name="Drones" component={Drones} />
             <Tab.Screen name="Electric Vehicles" component={ElectricVehicles} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator
