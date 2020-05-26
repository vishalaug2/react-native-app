import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/login/Login';
import Signup from '../components/login/Signup';
import AppHeader from '../common/AppHeader';

const Stack = createStackNavigator();

export default function LoginStack() {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}