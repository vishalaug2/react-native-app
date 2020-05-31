import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login/Login';
import Signup from '../screens/login/Signup';
import AppHeader from '../shared/AppHeader';
import DoctorDrawer from './doctor/DoctorDrawer';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
          header: ({ scene, previous, navigation }) => {
            return(
              <AppHeader />
            );
          }
        }} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="DoctorDrawer" component={DoctorDrawer} options={{
          header: ({ scene, previous, navigation }) => {
            return(
              <AppHeader />
            );
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}