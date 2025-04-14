import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Card from "./Card";
import useFetch from "@/services/useFetch";
import { fetchProducts } from "@/services/api";

const Featured = () => {
  const { data: products } = useFetch(() => fetchProducts());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        {products?.map((product) => (
          <Card product={product} key={product.id} height={240} width={240} />
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
