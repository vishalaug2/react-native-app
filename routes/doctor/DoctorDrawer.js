import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'native-base';
import HomeStack from '../../routes/doctor/HomeStack';
import PatientStack from '../../routes/doctor/PatientStack';
import SettingStack from "../../routes/doctor/SettingStack";
import Login from "../../screens/Signout";

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
          <Drawer.Screen name="SettingStack" component={SettingStack} options={{ 
            title: 'Settings', 
            drawerIcon: (focused, color, size) => (
              <Icon type="FontAwesome" name='cogs' />
            )
          }} />
          <Drawer.Screen name="Signout" component={Login} options={{ 
            title: 'Signout', 
            drawerIcon: (focused, color, size) => (
              <Icon type="FontAwesome" name='sign-out' />
            )
          }} />
        </Drawer.Navigator>
    );
}