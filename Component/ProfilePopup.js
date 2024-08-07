import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProfilePopup = () => {
  const [type, setType] = useState("profile");
  return (
    <View style={styles.moreModal}>
      <View style={styles.modalHandle}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 30,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: type === "profile" ? 1 : 0,
            paddingBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setType("profile");
            }}
          >
            <Image source={require("../assets/InnerOval.png")} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: type === "avtar" ? 1 : 0,
            paddingBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setType("avtar");
            }}
          >
            <Image
              source={require("../assets/dummyUser.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {type === "profile" ? (
        <View style={{ marginTop: 10, marginLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginTop: 10,
            }}
          >
            <Image source={require("../assets/gallery.png")} />
            <Text>New profile picture</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginTop: 10,
            }}
          >
            <Image source={require("../assets/bin2.png")} />
            <Text style={{ color: "red" }}>Remove current picture</Text>
          </View>
        </View>
      ) : (
        <View style={{ marginTop: 10, marginLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginTop: 10,
            }}
          >
            <Image
              source={require("../assets/pencil.png")}
              style={{ tintColor: "black" }}
            />
            <Text>Edit Profile Picture</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginTop: 10,
            }}
          >
            <Image source={require("../assets/dummyUser.png")} />
            <Text>Add avtar</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  moreModal: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 385,
    width: "100%",
    marginTop: "100%",
  },
  popupDiv: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  popupIcon: {
    padding: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 50,
  },
  moreModal: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 200,
    paddingTop: 10,
  },
  modalHandle: {
    width: 50,
    height: 5,
    backgroundColor: "gray",
    borderRadius: 50,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  modalOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  modalActions: {
    gap: 20,
    marginLeft: 10,
    marginTop: 20,
    paddingBottom: 10,
  },
  actionItem: {
    flexDirection: "row",
    gap: 5,
  },
});

export default ProfilePopup;
