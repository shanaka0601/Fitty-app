import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const categoryData = {
  'Women': [
    { id: 'w1', title: 'Black Long Sleeved Dress', price: '$20.25', image: require('../assets/images/Black Long sleeved dress.png'), description: 'Elegant black midi dress with a flattering fitted bodice and flowy skirt, designed to enhance a graceful silhouette.' },
    { id: 'w2', title: 'Pink Floral Dress', price: '$15.25', image: require('../assets/images/Pink floral dress.png') },
    { id: 'w3', title: 'Red Party Dress', price: '$25.25', image: require('../assets/images/Red frock.png') },
    { id: 'w4', title: 'Red Party Dress', price: '$15.25', image: require('../assets/images/Red frock.png') },

  ],
  'Men': [
    { id: 'm1', title: 'White long sleeved shirt', price: '$58.25', image: require('../assets/images/White long sl s.png'), description: 'Classic white long sleeved shirt for a clean, sophisticated look.' },
    { id: 'm2', title: 'Black Casual Shirt', price: '$58.25', image: require('../assets/images/Black Shirt.png'), description: 'Versatile black shirt, perfect for casual or formal wear.' },
  ],
  'Sarees': [
    { id: 's1', title: 'Black Silk Saree', price: '$120.00', image: require('../assets/images/black silk saree.png'), description: 'Stunning black silk saree with intricate gold border work.' },
    { id: 's2', title: 'Traditional Cotton Saree', price: '$85.00', image: require('../assets/images/saree category.png') },
  ],
  'Shoes': [
    { id: 'sh1', title: 'Sport Sneakers', price: '$45.00', image: require('../assets/images/shoes category.png'), description: 'Comfortable and stylish red sneakers for active lifestyles.' },
  ],
  'Accessories': [
    { id: 'a1', title: 'Premium Leather Bag', price: '$125.00', image: require('../assets/images/accessories category.png'), description: 'High-quality leather handbag with gold-tone hardware.' },
    { id: 'a2', title: 'Designer Watch', price: '$250.00', image: require('../assets/images/accessories category.png') },
  ],
  'Dresses': [
    { id: 'd1', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },
    { id: 'd2', title: 'Blue Summer Dress', price: '$50.25', image: require('../assets/images/blue frock.png') },
    { id: 'd3', title: 'Green Modern Dress', price: '$50.25', image: require('../assets/images/dress girl.png') },

  ],
};

const CategoryProductsScreen = ({ route, navigation }) => {
  const { categoryTitle } = route.params || { categoryTitle: 'Women' };
  const products = categoryData[categoryTitle] || [];

  return (
    <View style={styles.container}>
      <Header title={categoryTitle} showBack={true} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>{categoryTitle} Collection</Text>
          <Text style={styles.subtitle}>{products.length} Items Found</Text>
        </View>

        <View style={styles.grid}>
          {products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF0',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  headerSection: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default CategoryProductsScreen;
