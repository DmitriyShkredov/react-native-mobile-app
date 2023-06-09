import { View, StyleSheet, Text, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bluebox}></View>
      <View style={styles.redbox}></View>
      <Text style={styles.bold}>
        some text <Text style={styles.red}>red text</Text>
      </Text>
      <Image
        style={styles.logo}
        source={require("./assets/favicon.png")}
      ></Image>
      <Image
        style={styles.logo}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      ></Image>
      <Image
        style={styles.logo}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
        }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  bold: {
    fontWeight: "bold",
  },
  red: {
    color: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: "red",
  },
  bluebox: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
