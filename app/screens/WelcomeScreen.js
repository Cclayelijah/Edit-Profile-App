import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground source={require("../assets/bg.jpg")} style={styles.image}>
      <View style={styles.wrapper}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Edit Profile Demo App</Text>
          <Text style={styles.subHeading}>By Elijah Cannon</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to profile"
            onPress={() => navigation.navigate("Profile")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    color: "#FDC006",
    fontSize: 62,
    textAlign: "center",
  },
  subHeading: {
    color: "#FDC006",
    fontSize: 18,
    textAlign: "center",
  },
});

export default WelcomeScreen;
