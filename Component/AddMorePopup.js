import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const AddMorePopup = () => {
  return (
    <View style={styles.moreModal}>
      <View style={styles.modalHandle}></View>
      <Text style={{textAlign:"center",marginVertical:20,fontSize:20}}>Create</Text>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/reels.png")}
        />
        <Text>Reel</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/GridIcon.png")}
        />
        <Text>Post</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/story.png")}
        />
        <Text>Story</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/story-highlight.png")}
        />
        <Text>Story highlight</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/stream.png")}
        />
        <Text>Live</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/magic-wand.png")}
        />
        <Text>Made for you</Text>
      </View>
    </View>
  );
};

export default AddMorePopup;

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
  modalHandle: {
    width: 50,
    height: 5,
    backgroundColor: "gray",
    borderRadius: 50,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
