import React, { Component } from 'react';
import { Container, Header, Title, Content,  Body, Text,View,Footer,FooterTab,Button,Icon } from 'native-base';
export default class NotificationScreen extends Component {

  render() {
    return (
<Container>
        <View style={
          {
            flex:1,
            justifyContent:'center',
            alignItems:'center'
          }
        }>
        <Text>All the Notifications will be shown here.</Text>


</View>
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
