import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'native-base';
import HomeStack from '../../routes/doctor/HomeStack';
import PatientStack from '../../routes/doctor/PatientStack';
import PrescriptionStack from '../../routes/doctor/PrescriptionStack';

const Drawer = createDrawerNavigator();

export default function DoctorDrawer() { 
    return (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="HomeStack" component={HomeStack} options={{ 
            title: 'Home', 
            drawerIcon: (focused, color, size) => (
              <Icon type="FontAwesome" name='home' />
            )
          }} />
          <Drawer.Screen name="PatientStack" component={PatientStack} options={{ 
            title: 'Patients', 
            drawerIcon: (focused, color, size) => (
              <Icon type="FontAwesome" name='users' />
            )
          }} />
          <Drawer.Screen name="PrescriptionStack" component={PrescriptionStack} options={{ 
            title: 'Prescriptions', 
            drawerIcon: (focused, color, size) => (
              <Icon type="FontAwesome" name='file-text' />
            )
          }} />
        </Drawer.Navigator>
    );
}