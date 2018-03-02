import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { StackNavigator } from "react-navigation";

import HomeScreen from "./HomeScreen";

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
