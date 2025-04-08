import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FeaturedCard from "./FeaturedCard";
import useFetch from "@/services/useFetch";
import { fetchProducts } from "@/services/api";

const Featured = () => {
  const { data: products } = useFetch(() => fetchProducts());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        {products?.map((product) => (
          <FeaturedCard product={product} key={product.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Featured;

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {},
});
