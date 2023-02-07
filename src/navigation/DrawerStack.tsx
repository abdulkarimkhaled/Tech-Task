
//Drawer stack that contains home and profile screens with a custom logout button 
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Home,
  Profile
} from '../pages';

import { CustomDrawerContent } from './CustomDrawer';


const Drawer = createDrawerNavigator();
//add screen to navigation stack
export default function DrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}



