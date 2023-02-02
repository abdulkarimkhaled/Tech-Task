
//Drawer stack that contains home and profile screens with a custom logout button 
import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {
  Home,
  Profile
} from '../pages';
import { ScrollView, ScrollViewProps } from 'react-native';
import { DrawerNavigationHelpers, DrawerDescriptorMap } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import NavigationService from './NavigationService';
import Types from '../redux/types';
import { useDispatch } from 'react-redux';

function CustomDrawerContent(props: (JSX.IntrinsicAttributes & ScrollViewProps & { children: React.ReactNode; } & React.RefAttributes<ScrollView>) | (JSX.IntrinsicAttributes & { state: DrawerNavigationState<ParamListBase>; navigation: DrawerNavigationHelpers; descriptors: DrawerDescriptorMap; })) {
  const dispatch = useDispatch()
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          dispatch({
            type: Types.DELETE_LOGIN,
          })
          NavigationService.reset('Login')
        }}
      />
    </DrawerContentScrollView>
  );
}

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



