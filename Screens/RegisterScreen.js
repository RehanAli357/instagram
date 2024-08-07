import React from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import Form from "../commonComponent/Form";
import { userData } from "../Data/RegisterData";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../Firebase/Config";


const RegisterScreen = ({ navigation }) => {

  const addData = async(userId,userData)=>{
    console.log("second")
    try {
        const userRef = doc(firestore,"user",userId);
        await setDoc(userRef,userData,{merge:true})
        navigation.navigate("Login")
        console.log("done")
    } catch (error) {
        console.log("not done",error)
    }
}
  const handleSubmit = async (formData, setFormData) => {
    const data=userData;
    data.userDetails.email=formData.email
    data.userDetails.password=formData.password
    const id=`${new Date().valueOf()}`;
    data.id=id;
    setFormData((pdata)=>({
      ...pdata,
      id:id
    }))
   await addData(id,data);
   
  };

  return (
    <View style={styles.container}>
      <Form type="Register" onSubmit={handleSubmit} navigation={navigation} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
