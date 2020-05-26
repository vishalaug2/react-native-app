import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DoctorHome from '../components/doctor/DoctorHome';
import DoctorPatient from '../components/doctor/DoctorPatient';
import DoctorPrescription from '../components/doctor/DoctorPrescription';
import DoctorSetting from '../components/doctor/DoctorSetting';

const Tab = createBottomTabNavigator();

export default class DoctorStack extends React.Component {
  render(props) {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'DoctorHome') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'DoctorPatient') {
              iconName = focused ? 'ios-person' : 'ios-person';
            } else if (route.name === 'DoctorPrescription') {
              iconName = focused ? 'ios-document' : 'ios-document';
            } else if (route.name === 'DoctorSetting') {
              iconName = focused ? 'ios-settings' : 'ios-settings';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'darkblue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="DoctorHome" component={DoctorHome} />
        <Tab.Screen name="DoctorPatient" component={DoctorPatient} />
        <Tab.Screen name="DoctorPrescription" component={DoctorPrescription} />
        <Tab.Screen name="DoctorSetting" component={DoctorSetting} />
      </Tab.Navigator>
    );
  }
}