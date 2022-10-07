import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Python from "../screens/Python";
import HtmlandCss from "../screens/HtmlandCss"
import Javascript from "../screens/Javascript"
import Ol from "../screens/Ol"

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
            <Tab.Screen name="Python" component={Python} />
            <Tab.Screen name="Javascript" component={Javascript} />
             <Tab.Screen name="HtmalandCss" component={HtmlandCss} />
              <Tab.Screen name="Other Languages" component={Ol} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator