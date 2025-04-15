import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card';
import useFetch from '@/services/useFetch';
import { fetchProducts } from '@/services/api';

const Recommended = () => {
  const { data: products } = useFetch(() => fetchProducts());
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        {products?.map((product) => (
          <Card product={product} key={product.id} height={160} width={160} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Recommended

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {},
})
