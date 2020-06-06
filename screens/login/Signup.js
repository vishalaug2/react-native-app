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
      confirm_password: "",
      phone: "",
      doctor: "",
      errors: {}
    };
    this.state = { ...this._initialState };
  }

  handleSignup() {
    const rules = {
      name  : 'required',
      email  : 'required',
      password: 'required',
      confirm_password: 'required',
      phone: 'required',
      doctor: 'required'
    };

    const messages = {
      'name.required' : 'Name is required',
      'email.required'    : 'Email is required',
      'password.required'    : 'Password is required',
      'confirm_password.required'    : 'Confirm Password is required',
      'phone.required'    : 'Phone is required',
      'doctor.required'    : 'Select your Doctor'
    }

    validateAll(this.state, rules, messages)
    .then(() => {
      this.setState(this._initialState);
      this.props.navigation.navigate('DoctorDrawer');
    })
    .catch((errors) => {
      let formattedErrors = {};
      errors.forEach(error => {
        formattedErrors[error.field] = error.message;
      });
      this.setState({errors: formattedErrors});
    });
  }

  render() {
    return (
      <Container>
        <Content style={styles.content}>        
        <H2>
          Create a Patient
        </H2>
        <Form>
            <Item stackedLabel error={(this.state.errors['name'] ? true : false)}>
              <Label>Name</Label>
              <Input name="name" onChangeText={(name) => {this.setState({name})}} value={this.state.name} />
            </Item>
            {this.state.errors['name'] && <Text style={styles.errorText}>{this.state.errors['name']}</Text>}
            
            <Item stackedLabel  error={(this.state.errors['email'] ? true : false)}>
              <Label>Email</Label>
              <Input name="email" onChangeText={(email) => {this.setState({email})}} value={this.state.email} />
            </Item>
            {this.state.errors['email'] && <Text style={styles.errorText}>{this.state.errors['email']}</Text>}
            
            <Item stackedLabel  error={(this.state.errors['password'] ? true : false)}>
              <Label>Password</Label>
              <Input name="password" secureTextEntry={true} onChangeText={(password) => {this.setState({password})}} value={this.state.password} />
            </Item>
            {this.state.errors['password'] && <Text style={styles.errorText}>{this.state.errors['password']}</Text>}

            <Item stackedLabel  error={(this.state.errors['confirm_password'] ? true : false)}>
              <Label>Confirm Password</Label>
              <Input name="confirm_password" secureTextEntry={true} onChangeText={(confirm_password) => {this.setState({confirm_password})}} value={this.state.confirm_password} />
            </Item>
            {this.state.errors['confirm_password'] && <Text style={styles.errorText}>{this.state.errors['confirm_password']}</Text>}

            <Item stackedLabel  error={(this.state.errors['phone'] ? true : false)}>
              <Label>Phone</Label>
              <Input name="phone" onChangeText={(phone) => {this.setState({phone})}} value={this.state.phone} />
            </Item>
            {this.state.errors['phone'] && <Text style={styles.errorText}>{this.state.errors['phone']}</Text>}

            <Item picker style={styles.picker} error={(this.state.errors['doctor'] ? true : false)}>
                 <Picker
                mode="dropdown"
                iosHeader="Select your Doctor"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                name="doctor"
                onChangeText={(doctor) => {this.setState({doctor})}}
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