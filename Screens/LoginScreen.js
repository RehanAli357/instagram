import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ToastAndroid,
  Dimensions,
  Image,
} from "react-native";
import Form from "../commonComponent/Form";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../Firebase/Config";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../Redux/Slices/userAuthSlice";
import { setUserPosts } from "../Redux/Slices/userPostSlice";

const screenHeight = Dimensions.get("window").height;
const LoginScreen = ({ navigation }) => {
  const [progress, setProgress] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (formData, setFormData) => {
    try {
      const userCollectionRef = collection(firestore, "user");

      const q = query(
        userCollectionRef,
        where("userDetails.email", "==", formData.email)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        if (formData.password === userData.userDetails.password) {
          dispatch(
            setUserDetails({
              email: userData.userDetails.email,
              password: userData.userDetails,
              image: userData.userDetails.image,
              id: userData.id,
            })
          );
          dispatch(
            setUserPosts({
              posts: [...userData.posts],
            })
          );
          setProgress(true);
          setTimeout(() => {
            navigation.navigate("Landing");
            setProgress(false);
          }, 2000);
        } else {
          console.log("Incorrect password.");
        }
      } else {
        console.log("user does not exists");
      }
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        {progress ? (
          <View style={styles.loadingContainer}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Image
                source={require("../assets/instagram.png")}
                style={{ width: 70, height: 70 }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "gray" }}>from</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Image
                  source={require("../assets/meta.png")}
                  style={{ width: 40, height: 40, transform: "rotate(45deg)" }}
                />
                <Text style={{ fontSize: 20 }}>Meta</Text>
              </View>
            </View>
          </View>
        ) : (
          <Form type="login" onSubmit={handleSubmit} navigation={navigation} />
        )}
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  loadingContainer: {
    width: "100%",
    height: screenHeight,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
});
