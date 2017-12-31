import React, { Component } from 'react';
import { Container, Header, Content, List,Title, ListItem, Text,Icon,Left,Button ,Body} from 'native-base';
export default class ListHeaderExample extends Component {
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
          <Title>List</Title>
        </Body>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>COMEDY</Text>
            </ListItem>
            <ListItem >
              <Text>Hangover</Text>
            </ListItem>
            <ListItem>
              <Text>Horrible Bosses</Text>
            </ListItem>
            <ListItem>
              <Text>Conjuring</Text>
            </ListItem>
            <ListItem >
              <Text>ACTION</Text>
            </ListItem>
            <ListItem>
              <Text>Terminator Genesis</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
