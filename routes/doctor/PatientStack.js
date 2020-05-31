import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorPatient from '../../screens/doctor/DoctorPatient';
import UserHeader from "../../shared/UserHeader";

const Stack = createStackNavigator();

export default function PatientStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="DoctorPatient" component={DoctorPatient} options={({ navigation }) => { 
          return {
            headerTitle: () => <UserHeader navigation={navigation} title="Patients" /> 
          }
        }} />
      </Stack.Navigator>
  );
}