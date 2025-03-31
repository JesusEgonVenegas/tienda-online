import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const FeaturedCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/31367419/pexels-photo-31367419/free-photo-of-stylish-woman-in-leather-jacket-at-night.jpeg",
        }}
      />
      <Text>FeaturedCard</Text>
    </TouchableOpacity>
  );
};

export default FeaturedCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 240,
    height: 280,
    marginHorizontal: 6,
  },
  image: {
    width: 240,
    height: 240,
    resizeMode: "center",
    borderRadius: 12,
  },
});
