import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const ProductDetailScreen = ({ route }) => {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <Text>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  image: { width: '100%', height: 200, borderRadius: 8 },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 8 },
  description: { fontSize: 16, marginTop: 8 },
  price: { fontSize: 20, color: '#00a000', marginTop: 8 },
});

export default ProductDetailScreen;
