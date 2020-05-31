import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Text, Card, CardItem, Body, H1, H2, H3, Button } from 'native-base';
import { FontAwesome } from "@expo/vector-icons";
export default class DoctorHome extends React.Component {
  render(props) {
    return (
      <Container>
        <Content style={styles.content}>
        <Card>
            <CardItem header bordered style={styles.cardHeaderLastAccess}>
              <Text style={styles.cardHeaderText}><FontAwesome name="clock-o" size={16} /> Last Access</Text>
            </CardItem>
            <CardItem bordered>
              <Text style={styles.cardItemText}>
                  Dated: 31 Mar, 2020 6:50 AM
              </Text>
            </CardItem>
          </Card>
        <Card>
            <CardItem header bordered style={styles.cardHeaderApproved}>
              <Text style={styles.cardHeaderText}><FontAwesome name="check" size={16} /> Approved Patients</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <H1>
                  50
                </H1>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered style={styles.cardHeaderUnapproved}>
              <Text style={styles.cardHeaderText}><FontAwesome name="times" size={16} /> Unapproved Patients</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <H1>
                  5
                </H1>
              </Body>
            </CardItem>
          </Card>
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
  cardHeaderLastAccess: {
    backgroundColor: 'darkblue',
    height: 30
  },
  cardHeaderApproved: {
    backgroundColor: 'green',
    height: 30
  },
  cardHeaderUnapproved: {
    backgroundColor: 'red',
    height: 30
  },
  cardHeaderText: {
    color: '#FFFFFF',
    fontSize: 14
  },
  cardItemText: {
    fontSize: 13
  }
});