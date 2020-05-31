import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Icon } from 'native-base';
export default class AppHeader extends Component {    
    render() {        
        return (            
            <Header>
                <Left><Icon style={styles.icon} type="FontAwesome" name='user-md' /></Left>
                <Body>
                    <Title>Patient Tracking</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}

var styles = StyleSheet.create({
    icon: {
        color: '#FFFFFF'
    }
});