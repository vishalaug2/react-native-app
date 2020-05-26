import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Text, H1, H2, H3, Form, Item, Input, Label, Button, Picker, Icon } from 'native-base';

export default class Login extends React.Component {
  render(props) {    
    return (
      <Container>
        <Content style={styles.content}>        
        <H2>
          Create a Patient
        </H2>
        <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Phone</Label>
              <Input />
            </Item>
            <Item picker style={styles.picker}>
                 <Picker
                mode="dropdown"
                iosHeader="Select your Doctor"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}>
                    <Picker.Item label="Select your Doctor" value="" />
                    <Picker.Item label="Dr. Vimal Kumar" value="1" />
                </Picker>
            </Item>
            <Button success style={styles.button}>
              <Text>Create account</Text>
            </Button>
          </Form>
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    marginTop: 20,
    textAlign: "center",
    width: "42%"
  },
  picker: {
      marginTop: 20
  }
});