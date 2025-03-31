import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const RecommendedCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg",
        }}
      />
      <Text>Recommended Card</Text>
    </TouchableOpacity>
  );
};

export default RecommendedCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 160,
    height: 225,
    marginHorizontal: 6,
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: "center",
    borderRadius: 12,
  },
});
