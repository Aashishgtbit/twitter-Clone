import React, { Component } from "react";
import { Button, Text, Icon, Footer, FooterTab,Header } from "native-base";

import { TabNavigator } from "react-navigation";

import NotificationScreen from  "./Components/Component1/NotificationScreen.js";
import MessageScreen from  './Components/Component1/MessageScreen';

import SearchBarActivity from  './Components/Component1/SearchBarActivity';

export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: HomeScreen },
    Search: { screen: SearchBarActivity },
    NotificationScreen: { screen: NotificationScreen },
    Messages:{screen:MessageScreen}
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}>
              <Icon name="home" />

            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Search")}>
              <Icon name="search" />

            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("NotificationScreen")}>
              <Icon name="Notifications" />

            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Messages")}>
              <Icon name="mail" />

            </Button>
          </FooterTab>
        </Footer>



      );
    }
  }
));
