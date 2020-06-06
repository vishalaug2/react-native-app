import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Text, H1, H2, H3, Form, Item, Input, Label, Button, Picker, Icon } from 'native-base';
import { validateAll } from 'indicative/validator'

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this._initialState = {
      username: '',
      password: '',
      errors: {}
    };
    this.state = { ...this._initialState };
  }

  checkLogin() {
    const rules = {
      username  : 'required',
      password  : 'required'
    };

    const messages = {
      'username.required' : 'Username is required',
      'password.required'    : 'Password is required'
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
            Login
        </H2>
          <Text style={styles.headingdesc}>Please sign in to continue</Text>
          <Form>
            <Item stackedLabel error={(this.state.errors['username'] ? true : false)}>
              <Label>Username</Label>
              <Input name="username" onChangeText={(username) => this.setState({username})} value={this.state.username} />
              {this.state.errors['username'] && <Icon name='close-circle' />}
            </Item>
            <Item stackedLabel error={(this.state.errors['password'] ? true : false)}>
              <Label>Password</Label>
              <Input secureTextEntry={true} name="password"  onChangeText={(password) => this.setState({password})} value={this.state.password} />
              {this.state.errors['password'] && <Icon name='close-circle' />}
            </Item>
            <Button onPress={this.checkLogin.bind(this)} iconLeft primary style={styles.button}>
              <Icon type="FontAwesome" name='arrow-right' />
              <Text>Login</Text>
            </Button>
            <Button onPress={() => { this.props.navigation.navigate('Signup') }} iconLeft success style={styles.button}>
              <Icon type="FontAwesome" name='user' />
              <Text>Sign up new Patient</Text>
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
    textAlign: "center"
  },
  headingdesc: {
    color: '#C0C0C0'
  }
});