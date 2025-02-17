import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error(error));
  }, []);

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail', { id: item.id })}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: { marginBottom: 10, backgroundColor: '#fff', padding: 10, borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 },
  image: { width: '100%', height: 150, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 8 },
  price: { fontSize: 16, color: '#00a000', marginTop: 4 },
});

export default ProductListScreen;
