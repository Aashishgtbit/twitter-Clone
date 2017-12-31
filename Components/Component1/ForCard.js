import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container,Card,CardItem,  Thumbnail, ListItem,List ,Button, Content, Left, Right, Body, Icon, Text,Badge } from 'native-base';
export default class ForCard extends React.Component{

	render()
	{
		return(

		<Content>
		<Body>
		<Card>


			 <List >
			       	<ListItem avatar >
			              <Left>
			                <Thumbnail source={{ uri: 'https://avatars1.githubusercontent.com/u/16924139?s=400&u=1574206c40b898c74d139a4c34997f294c77cb6f&v=4' }} />
			             </Left>
			                     <Body>
			                      <Text style={{fontWeight: 'bold'}}>
			                        Aman Tiwari

            <Icon name="ios-checkmark-circle" style={{ fontSize: 15, color: "blue", lineHeight: 20 }}/>

			                        <Text note> @innovative </Text>
			                        <Text note>3:43 pm <Icon name="ios-arrow-down" style={{ fontSize: 15, color: "#000", lineHeight: 20 }}/>
															  </Text>

			                      </Text>

			                      <Text >Doing what you like will always keep you happieee...</Text>
			              </Body>


			            </ListItem>
			        </List>
			         <Body>
			       	<CardItem cardBody>

			              <Image source= {{ uri: 'http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_04_hd_pictures_166258.jpg'}} style={{height: 200, width: null, flex: 1}}/>
			            </CardItem>
			            <CardItem>
			              <Body>
			                <Button transparent>
			                  <Icon active name="chatbubbles" />
			                  <Text>60</Text>
			                </Button>
			              </Body>
			              <Body>
			                <Button transparent>
			                  <Icon active name="git-compare" />
			                  <Text>4</Text>
			                </Button>
			              </Body>

			               <Body>
				                <Button transparent>
				                  <Icon active name="heart" />

				                  <Text> 4 </Text>
				                </Button>
				          </Body>

			              <Body>

				            <Button transparent>
				              	<Icon active name="mail" />
				           	</Button>

			              </Body>
			            </CardItem>

        			</Body>

        			</Card>
        			</Body>

        		</Content>



			);
	}

}
