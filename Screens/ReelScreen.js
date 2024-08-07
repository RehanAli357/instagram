import React, { useRef, useState, useEffect } from "react";
import {
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import { Video } from "expo-av";
import SwiperFlatList from "react-native-swiper-flatlist";
import { video } from "../Data/Video";
import FooterNavigation from "../Component/FooterNavigation";
import MoreOptionsPopup from "../Component/MoreOptionsPopup";
import CommentsOption from "../Component/CommentsOption";

const { height, width } = Dimensions.get("window");

const ReelScreen = ({ navigation }) => {
  const [crrIndex, setIndex] = useState(0);
  const [posts, setPosts] = useState(video);
  const [isOpen, setIsOpen] = useState({
    visibility: false,
    type: "",
  });
  const videoRefs = useRef([]);
  console.log(isOpen);
  useEffect(() => {
    const blurSubscription = navigation.addListener("blur", () => {
      videoRefs.current[crrIndex]?.pauseAsync();
    });

    const focusSubscription = navigation.addListener("focus", () => {
      videoRefs.current[crrIndex]?.playAsync();
    });

    return () => {
      blurSubscription();
      focusSubscription();
    };
  }, [crrIndex]);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.videoContainer}>
        <Video
          ref={(ref) => (videoRefs.current[index] = ref)}
          source={item.video}
          style={styles.video}
          useNativeControls={false}
          shouldPlay={index === crrIndex}
          isLooping
          resizeMode="cover"
          isMuted={false}
          volume={1.0}
        />
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.reelText}>Reels</Text>
            <Image
              source={require("../assets/camera.png")}
              style={styles.moreIcon}
            />
          </View>
          <View style={styles.footer}>
            <View>
              <View style={styles.userInfo}>
                <Image
                  source={
                    item.image ? item.image : require("../assets/user.png")
                  }
                  style={styles.userImage}
                />
                <Text style={styles.userName}>{item.userName}</Text>
              </View>
              <Text style={styles.caption}>{item.caption}</Text>
            </View>

            <View
              style={{
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <View>
                <Image source={require("../assets/unlike.png")} />
                <Text style={{ textAlign: "center" ,tintColor: "white"}}>{item.like}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsOpen({
                    type: "comments",
                    visibility: !isOpen.visibility,
                  });
                }}
              >
                <View>
                  <Image source={require("../assets/chat.png")} />
                  <Text style={{ textAlign: "center",tintColor: "white" }}>{item.comments.length}</Text>
                </View>
              </TouchableOpacity>
              <View>
                <Image source={require("../assets/Messanger.png")} />
                <Text style={{ textAlign: "center",tintColor: "white" }}>{item.share}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsOpen({ type: "more", visibility: !isOpen.visibility });
                }}
              >
                <View>
                  <Image
                    source={require("../assets/MoreIcon.png")}
                    style={{ transform: "rotate(90deg)",tintColor: "white" }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const changeIndex = ({ index }) => {
    setIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SwiperFlatList
        vertical
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onChangeIndex={changeIndex}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No Reel Uploaded Yet</Text>
        }
      />
      <View style={styles.screenFooter}>
        <FooterNavigation navigation={navigation} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen.visibility}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setIsOpen({ ...isOpen, visibility: false })}
        >
          {isOpen.type === "more" ? <MoreOptionsPopup /> : <CommentsOption />}
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  videoContainer: {
    height: height,
    justifyContent: "center",
  },
  video: {
    height: height,
    width: width,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "space-between",
    padding: 20,
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reelText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  moreIcon: {
    width: 25,
    height: 25,
  },
  footer: {
    marginBottom: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    marginLeft: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  caption: {
    marginTop: 5,
    color: "white",
    fontSize: 14,
  },
  screenFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "red",
    // padding: 15,
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  emptyMessage: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
});

export default ReelScreen;
