import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Text, List, ListItem, Left, Button, Body, Right, Item, Input, Icon, Fab } from 'native-base';
import { FontAwesome } from "@expo/vector-icons";

export default function DoctorPatient({ navigation }) {  
    return (
      <Container>
        <Fab
          direction="up"
          style={styles.addButton}
          position="bottomRight" onPress={() => {navigation.navigate('DoctorNewPatient')}} >
          <Icon name="add" />
        </Fab>
        <Content>        
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
          <List>
            <ListItem avatar>
              <Left>
                <FontAwesome name="user" size={28} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Button transparent light>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>            
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <FontAwesome name="user" size={28} />
              </Left>
              <Body>
                <Text>Kumar Sanchit</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Button transparent light>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>            
          </List>
        </Content>
      </Container>
    );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  addButton: {
    zIndex:1
  }
});