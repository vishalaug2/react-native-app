import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorSetting from "../../screens/doctor/DoctorSetting";
import UserHeader from "../../shared/UserHeader";

const Stack = createStackNavigator();

export default function SettingStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DoctorSetting" component={DoctorSetting} options={({ navigation }) => { 
        return {
          headerTitle: () => <UserHeader navigation={navigation} title="Settings" /> 
        }
      }} />
    </Stack.Navigator>
);
}

