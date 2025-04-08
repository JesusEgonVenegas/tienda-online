import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

interface FeaturedCardProps {
  product: Product;
}

const FeaturedCard = ({ product }: FeaturedCardProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        // resizeMode="contain"
      />
      <Text>{product.name}</Text>
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
    gap: 16,
  },
  image: {
    width: 240,
    height: 240,
    resizeMode: "center",
    borderRadius: 12,
  },
});
