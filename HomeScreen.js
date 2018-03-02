import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
  Button,
  FlatList,
  ActivityIndicator
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Contact List"
  };

  constructor(props) {
    super(props);

    this.state = {
      data: ["asdf", "fdsa", "123fadsf", "asdf23rh", "asd8923"],
      isLoading: true
    };

    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 5000);
  }

  handleTouch = event => {
    Alert.alert("ini handle dari luar");
  };

  renderItem = item => {
    return (
      <View
        style={{
          padding: 16,
          borderWidth: 1,
          borderColor: "rgb(224,224,224)"
        }}
      >
        <Text>{item.item}</Text>
      </View>
    );
  };

  renderFooter = () => {
    if (!this.state.isLoading) return null;
    return <ActivityIndicator size="small" animating style={{ margin: 16 }} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={this.renderItem}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}

export default HomeScreen;
