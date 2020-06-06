import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Text, H1, H2, H3, Form, Item, Input, Label, Button, Picker, Icon } from 'native-base';
import { validateAll } from "indicative/validator";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this._initialState = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone: "",
      doctor: "",
      errors: {}
    };
    this.state = { ...this._initialState };
  }

  handleSignup() {
    const rules = {
      name: 'required|min:6',
      email: 'required|email',
      password: 'required|min:4|confirmed',
      phone: 'required|number',
      doctor: 'required'
    };

    const messages = {
      'name.required': 'Name is required',
      'name.min': 'Name should contain at least 6 chars',
      'email.required': 'Email is required',
      'email.email': 'Email should be valid',
      'password.required': 'Password is required',
      'password.min': 'Password should contain at least 4 chars',
      'password.confirmed': 'Password & Confirm Password should be same',
      'phone.required': 'Phone is required',
      'phone.number': 'Phone should contains digits only',
      'doctor.required': 'Select your Doctor'
    }

    validateAll(this.state, rules, messages)
      .then(() => {
        this.setState(this._initialState);
      })
      .catch((errors) => {
        let formattedErrors = {};
        errors.forEach(error => {
          formattedErrors[error.field] = error.message;
        });
        this.setState({ errors: formattedErrors });
      });
  }

  render() {
    console.log('----------------', this.state);
    return (
      <Container>
        <Content style={styles.content}>
          <H2>
            Create a Patient
        </H2>
          <Form>
            <Item stackedLabel error={(this.state.errors['name'] ? true : false)}>
              <Label>Name</Label>
              <Input name="name" onChangeText={(name) => { this.setState({ name }) }} value={this.state.name} />
            </Item>
            {this.state.errors['name'] && <Text style={styles.errorText}>{this.state.errors['name']}</Text>}

            <Item stackedLabel error={(this.state.errors['email'] ? true : false)}>
              <Label>Email</Label>
              <Input name="email" onChangeText={(email) => { this.setState({ email }) }} value={this.state.email} />
            </Item>
            {this.state.errors['email'] && <Text style={styles.errorText}>{this.state.errors['email']}</Text>}

            <Item stackedLabel error={(this.state.errors['password'] ? true : false)}>
              <Label>Password</Label>
              <Input name="password" secureTextEntry={true} onChangeText={(password) => { this.setState({ password }) }} value={this.state.password} />
            </Item>
            {this.state.errors['password'] && <Text style={styles.errorText}>{this.state.errors['password']}</Text>}

            <Item stackedLabel error={(this.state.errors['password_confirmation'] ? true : false)}>
              <Label>Confirm Password</Label>
              <Input name="password_confirmation" secureTextEntry={true} onChangeText={(password_confirmation) => { this.setState({ password_confirmation }) }} value={this.state.password_confirmation} />
            </Item>
            {this.state.errors['password_confirmation'] && <Text style={styles.errorText}>{this.state.errors['password_confirmation']}</Text>}

            <Item stackedLabel error={(this.state.errors['phone'] ? true : false)}>
              <Label>Phone</Label>
              <Input name="phone" onChangeText={(phone) => { this.setState({ phone }) }} value={this.state.phone} />
            </Item>
            {this.state.errors['phone'] && <Text style={styles.errorText}>{this.state.errors['phone']}</Text>}

            <Item picker style={styles.picker} error={(this.state.errors['doctor'] ? true : false)}>
              <Picker
                mode="dropdown"
                iosHeader="Select your Doctor"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                name="doctor"
                onChangeText={(doctor) => { this.setState({ doctor }) }}
              >
                <Picker.Item label="Select your Doctor" value="" />
                <Picker.Item label="Dr. Vimal Kumar" value="1" />
              </Picker>
            </Item>
            {this.state.errors['doctor'] && <Text style={styles.errorText}>{this.state.errors['doctor']}</Text>}

            <Button success style={styles.button} onPress={this.handleSignup.bind(this)}>
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
  },
  errorText: {
    color: 'red',
    paddingLeft: 15,
    fontSize: 14
  }
});