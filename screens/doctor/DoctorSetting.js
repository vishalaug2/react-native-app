import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function DoctorProfile() {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
}

function AppSetting() {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
}

export default class DoctorSetting extends React.Component {
  render(props) {
    return (
      <Tab.Navigator>
        <Tab.Screen name="DoctorProfile" component={DoctorProfile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="AppSetting" component={AppSetting} options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cog" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
});