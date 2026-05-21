import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function ProceedScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params || {};
  const { image, title, price, description = 'No description available.' } = product || {};

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.image} />
      <View style={styles.infoBox}>
        <Text style={styles.title}>{title ?? 'Product'}</Text>
        <Text style={styles.price}>${price ?? '--'}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.shipping}>Shipping Time: 3‑5 Business Days</Text>
        <TouchableOpacity style={styles.placeOrderBtn} onPress={() => {
          // Placeholder for actual order placement logic
          alert('Order placed!');
          navigation.popToTop(); // Return to home after placing order
        }}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF0',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 15,
    color: '#555',
  },
  shipping: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
    color: '#777',
  },
  placeOrderBtn: {
    backgroundColor: '#FF9500',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeOrderText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
