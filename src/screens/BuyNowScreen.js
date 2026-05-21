import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function BuyNowScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params || {};

  const handleProceed = () => {
    // Placeholder for actual purchase logic
    alert(`Proceeding to purchase ${product?.title || 'item'}`);
  };

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>No product data.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={typeof product.image === 'string' ? { uri: product.image } : product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <TouchableOpacity style={styles.proceedBtn} onPress={handleProceed}>
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF0',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#000',
    marginBottom: 30,
  },
  proceedBtn: {
    backgroundColor: '#FF9500',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  proceedText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  message: {
    fontSize: 18,
    color: '#555',
  },
});
