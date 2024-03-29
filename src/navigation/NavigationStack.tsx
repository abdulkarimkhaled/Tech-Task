

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Login, Post, Splash,
} from '../pages';
import DrawerStack from './DrawerStack';
import { RootStackParamList } from '../config/appTypes';


const Stack = createNativeStackNavigator<RootStackParamList>();

//add screen to navigation stack
export default function NavigationStack() {
  return (
    <Stack.Navigator
      initialRouteName={"Splash"}
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator >
  );
}



