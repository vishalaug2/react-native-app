import React from "react";
import { Container, Content, Text, Button } from "native-base";

export default function Signout({ navigation }) {
    return(
        <Container>
            <Content>
                <Text>Are you sure you want to signout?</Text>
            </Content>
        </Container>
    );
}