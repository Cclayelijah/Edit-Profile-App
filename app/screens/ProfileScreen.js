import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import PhoneInput from "../components/PhoneInput";
import ProfileImage from "../components/ProfileImage";

let userInfo = {
  fName: "Micah",
  lName: "Smith",
  phone: "(208)206-5039",
  email: "micahsmith@gmail.com",
  bio: "I like dogs",
};

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ProfileImage />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>First Name</Text>
          <TextInput
            name="fName"
            style={styles.input}
            defaultValue={userInfo.fName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Last Name</Text>
          <TextInput
            name="lName"
            style={styles.input}
            defaultValue={userInfo.lName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Phone</Text>
          <PhoneInput num={userInfo.phone} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            name="email"
            style={styles.input}
            defaultValue={userInfo.email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Bio</Text>
          <TextInput
            name="bio"
            style={styles.input}
            defaultValue={userInfo.bio}
          />
        </View>
        <Button title="Update" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const handleSubmit = () => {
  console.log("success");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 2,
    paddingHorizontal: 20,
  },
  inputContainer: {
    padding: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  title: {
    fontSize: 12,
    color: "#FDC006",
  },
  input: {
    fontSize: 20,
    color: "white",
  },
});

export default ProfileScreen;
