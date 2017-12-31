import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem,Thumbnail,Icon, Card,CardItem,Body,Footer,FooterTab,Button,Left,Right} from "native-base";


const datas = [
  {
    name:"Profile",
    route:"Profile",
    icon:"ios-person"
  },
  {
    name:"List",
    route:"List",
    icon:"ios-list-box"
  },
  {
    name:"Moments",
    route:"Moments",
    icon:"ios-flash"
  },
  {
    name:"HighLights",
    route:"HighLights",
    icon:"ios-paper"
  },
  

];


export default class SideBar extends React.Component {

  render() {
    return (
      <Container>
        <Content>
        <Card>
            <CardItem>
              <Left>
              <Thumbnail source={{uri: 'https://avatars1.githubusercontent.com/u/16924139?s=400&u=1574206c40b898c74d139a4c34997f294c77cb6f&v=4'}} />

              </Left>

            </CardItem>

              <Text style={{fontWeight: 'bold'}}>Aashish Tiwari</Text>
              <Text note>@Aashish_Tiwari_</Text>
              <Text style={{fontWeight: 'bold'}}>
              690
              <Text note > Following </Text>
              <Text>1.2k</Text>
              <Text note> Follwers</Text>
              </Text>

          <CardItem>

          <List
            dataArray={datas}
            renderRow={data =>

                  <ListItem
                      button
                      onPress={() => this.props.navigation.navigate(data.route)}>

                    <Left>
                      <Icon
                        active
                        name={data.icon}
                        style={{ color: "#000", fontSize: 26, width: 30 }}
                      />
                      <Text >
                        {data.name}
                      </Text>

                    </Left>
                    </ListItem>
                  }
            />
            </CardItem>
            <CardItem>
                <List>
                    <ListItem>
                        <Text>Settings and Privacy</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Help Centre</Text>
                    </ListItem>
                </List>

            </CardItem>

            </Card>
            <Footer>
                <FooterTab style={{backgroundColor:'#fff'}}>
                <Left>
                  <Button light>
                    <Icon name="ios-moon" />
                  </Button>
                </Left>

                <Right>
                  <Button light>
                    <Icon name="ios-apps" />
                  </Button>
                </Right>
                </FooterTab>
        </Footer>

          </Content>
        </Container>
      );
    }
  }
