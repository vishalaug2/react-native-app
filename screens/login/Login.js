import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Content, Text, H1, H2, H3, Form, Item, Input, Label, Button, Picker, Icon } from 'native-base';

export default function Login({ navigation }) {
   return (
      <Container>
        <Content style={styles.content}>        
        <H2>
          Login
        </H2>
        <Text style={styles.headingdesc}>Please sign in to continue</Text>
        <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
            <Button onPress={() => {navigation.navigate('DoctorDrawer')}}  iconLeft primary style={styles.button}>
              <Icon type="FontAwesome" name='arrow-right' />
              <Text>Login</Text>
            </Button>
            <Button onPress={() => {navigation.navigate('Signup')}} iconLeft success style={styles.button}>
              <Icon type="FontAwesome" name='user' />
              <Text>Sign up new Patient</Text>
            </Button>
          </Form>
      </Content>
      </Container>
    );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    marginTop: 20,
    textAlign: "center"
  },
  headingdesc: {
      color: '#C0C0C0'
  }
});