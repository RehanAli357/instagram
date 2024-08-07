import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const HanburgerPopup = () => {
  return (
    <View style={styles.moreModal}>
      <View style={styles.modalHandle}></View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/setting.png")}
        />
        <Text>Setting and privacy</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/activity.png")}
        />
        <Text>Activity</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/restore.png")}
        />
        <Text>Archive</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/scan.png")}
        />
        <Text>QR code</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/Shape2.png")}
        />
        <Text>Saved</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/twouser.png")}
        />
        <Text>Supervision</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/paymentCard.png")}
        style={{width:30,height:30}}
        />
        <Text>Orders and payments</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/verify.png")}
        />
        <Text>Meta verified</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/closeFriends.png")}
        />
        <Text>Close Friends</Text>
      </View>
      <View style={{flexDirection:"row",marginLeft:10,gap:10,marginVertical:10}}>
        <Image
        source={require("../assets/twouser.png")}
        />
        <Text>Favorites</Text>
      </View>
    </View>
  )
}

export default HanburgerPopup

const styles = StyleSheet.create({
    moreModal: {
      backgroundColor: "white",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: 480,
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
  