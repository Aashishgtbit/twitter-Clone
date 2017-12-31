import React, { Component } from 'react';
import { Container, Header, Title, Content,  Body, Text,Left,Button,Icon } from 'native-base';
export default class HighLightsScreen extends Component {
  render() {
    return (
      <Container >
      <Header  >

        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>HighLights</Title>
        </Body>
        </Header>
        <Content >
        <Text>This is under construction.</Text>
        </Content>
      </Container>
    );
  }
}
