import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorPrescription from '../../screens/doctor/DoctorPrescription';
import UserHeader from "../../shared/UserHeader";

const Stack = createStackNavigator();

export default function PrescriptionStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="DoctorPrescription" component={DoctorPrescription} options={({ navigation }) => { 
          return {
            headerTitle: () => <UserHeader navigation={navigation} title="Prescriptions" /> 
          }
        }} />
      </Stack.Navigator>
  );
}