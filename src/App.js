import React, { Component } from 'react';
import { Alert } from 'react-native';

import MyForm from './components/MyForm';

import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Login from "./screens/Login/";
import Register from "./screens/Register/";
import Image from "./screens/Image/";

const Drawer = DrawerNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    Image: { screen: Image }
  },
  {
    initialRouteName: "Login",
    contentOptions: {
      activeTintColor: "#e91e63"
    }
   }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
