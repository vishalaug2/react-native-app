import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Text, H1, H2, H3, Form, Item, Input, Label, Button, Picker, Icon } from 'native-base';

export default class DoctorHome extends React.Component {
  render(props) {    
    return (
      <Container>
        <Content style={styles.content}>        
        <H2>
          Doctor Dashboard
        </H2>
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