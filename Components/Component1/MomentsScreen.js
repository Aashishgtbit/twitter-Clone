import React, { Component } from 'react';
import { Container, Header, Title, Content,  Body, Text,Button,Left,Icon } from 'native-base';
export default class MomentsScreen extends Component {
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
          <Title>Moments</Title>
        </Body>
        </Header>
        <Content>
        <Text>This is under construction.</Text>
        </Content>
      </Container>
    );
  }
}
