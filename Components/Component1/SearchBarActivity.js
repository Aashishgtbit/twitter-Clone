import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Body, Button, Text ,View,Footer,FooterTab} from 'native-base';



export default class SearchBarActivity extends React.Component {



  render() {
    return (

<Container>
<Body/>

<Footer >
    <FooterTab style={{backgroundColor:'#fff'}}>


      <Button light >

        <Text>ALL</Text>
      </Button>


      <Button light>

        <Text>MENTIONS</Text>
      </Button>


      <Button light>
        <Icon name="settings" />

      </Button>
    </FooterTab>
  </Footer>


</Container>
    );
  }
}
