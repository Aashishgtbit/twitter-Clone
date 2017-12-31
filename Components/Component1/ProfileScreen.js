import React, { Component } from 'react';
import { Container, Header, Title, Content,  Body, Text,Icon,Left,Button } from 'native-base';
export default class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Header  >

          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          </Header>
        <Content>
        <Button  rounded block success>
            <Text>Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
