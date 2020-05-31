import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorHome from '../../screens/doctor/DoctorHome';
import UserHeader from "../../shared/UserHeader";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="DoctorHome" component={DoctorHome} options={({ navigation }) => { 
          return {
            headerTitle: () => <UserHeader navigation={navigation} title="Home" /> 
          }
        }} />
      </Stack.Navigator>
  );
}