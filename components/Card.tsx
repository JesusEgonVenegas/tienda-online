import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CardProps {
  product: Product;
  height: number;
  width: number;
}

const Card = ({ product, height, width }: CardProps) => {
  return (
    <TouchableOpacity style={[styles.container, { width: width }]}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        height={height}
        width={width}
      // resizeMode="contain"
      />
      <Text>{product.name}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 240,
    height: 280,
    marginHorizontal: 6,
    gap: 16,
  },
  image: {
    // width: 240,
    // height: 240,
    resizeMode: "center",
    borderRadius: 12,
  },
});
