import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Languages from "./Languages"
import Introduction from "../screens/introduction"
import Javascript from "../screens/Javascript"
import Employmentopportunities from "../screens/Employmentopportunities"
import Revolution from "./Revolution"
import Enroll from "../screens/Enroll"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Introduction} />
           
             <Drawer.Screen name="Popular Languages" component={Languages} />
             <Drawer.Screen name="Job Opportunities" component={Employmentopportunities}/>
             <Drawer.Screen name="Revolution" component={Revolution}/>
             <Drawer.Screen name="Enroll for Coding" component={Enroll}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;