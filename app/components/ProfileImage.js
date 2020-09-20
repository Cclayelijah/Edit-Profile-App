import React from "react";
import { StyleSheet, Image, View } from "react-native";

function ProfileImage() {
  return (
    <View style={styles.imgContainer}>
      <Image
        source={require("../assets/profile-img.jpeg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    height: 175,
    width: 175,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderWidth: 7,
    borderColor: "#FDC006",
    borderRadius: 100,
  },
});

export default ProfileImage;
