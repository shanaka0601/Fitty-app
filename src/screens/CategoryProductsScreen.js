import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const categoryData = {
  'Women': [
    { id: 'w1', title: 'Black Long Sleeved Dress', price: '$20.25', image: require('../assets/images/Black Long sleeved dress.png'), description: 'Elegant black midi dress with a flattering fitted bodice and flowy skirt, designed to enhance a graceful silhouette.' },
    { id: 'w2', title: 'Pink Floral Dress', price: '$15.25', image: require('../assets/images/Pink floral dress.png') },
    { id: 'w3', title: 'Boho Style Skirt', price: '$21.00', oldPrice: '$30.00', image: require('../assets/images/Boho Style Skirt.png'), discount: '30% OFF' },
    { id: 'w4', title: 'Pink Spotted Dress', price: '$25.25', image: require('../assets/images/pink spotted dress.png'), discount: '15% OFF' },
    { id: 'w5', title: 'Red Long Dress', price: '$20.25', image: require('../assets/images/Red frock.png') },
    { id: 'w6', title: 'Light Blue Dress', price: '$20.25', image: require('../assets/images/blue frock detail.png') },
    { id: 'w7', title: 'Red Crop Top', price: '$21.00', image: require('../assets/images/red croptop.png'), discount: '30% OFF' },
    { id: 'w8', title: 'Essential Spring Skirt', price: '$22.50', image: require('../assets/images/Essential Spring Skirt with Casual shirt.png'), discount: '25% OFF' },
    { id: 'w9', title: 'Blue Long sleeved T Shirt', price: '$12.50', image: require('../assets/images/Blue ts.png'), discount: '50% OFF' },
    { id: 'w10', title: 'White Long sleeved T Shirt', price: '$12.50', image: require('../assets/images/white ts.png'), discount: '50% OFF' },
    { id: 'w11', title: 'Brown Short Skirt', price: '$18.00', image: require('../assets/images/Brown short.png') },

  ],
  'Men': [
    { id: 'm1', title: 'White long sleeved shirt', price: '$58.25', image: require('../assets/images/White long sl s.png'), description: 'Classic white long sleeved shirt for a clean, sophisticated look.' },
    { id: 'm2', title: 'Black Casual Shirt', price: '$58.25', image: require('../assets/images/Black Shirt.png'), description: 'Versatile black shirt, perfect for casual or formal wear.' },
  ],
  'Sarees': [
    { id: 's1', title: 'Black Silk Saree', price: '$28.00', image: require('../assets/images/black silk saree.png'), description: 'Stunning black silk saree with intricate gold border work.' },
    { id: 's2', title: 'Traditional Saree', price: '$25.00', image: require('../assets/images/Traditional Saree.png') },
    { id: 's3', title: 'Eternal Blue Elegance saree', price: '$22.00', image: require('../assets/images/Blue saree.png') },

  ],
  'Shoes': [
    { id: 'sh1', title: 'Sport Sneakers', price: '$35.00', image: require('../assets/images/shoes category.png'), description: 'Comfortable and stylish red sneakers for active lifestyles.' },
  ],
  'Accessories': [
    { id: 'a1', title: 'Premium Leather Bag', price: '$25.00', image: require('../assets/images/accessories category.png'), description: 'High-quality leather handbag with gold-tone hardware.' },
    { id: 'a2', title: 'Designer Watch', price: '$40.00', image: require('../assets/images/accessories category.png') },
  ],
  'Dresses': [
    { id: 'd1', title: 'Red Long Dress', price: '$20.25', image: require('../assets/images/Red frock.png') },
    { id: 'd2', title: 'Blue Summer Dress', price: '$20.25', image: require('../assets/images/blue frock.png') },
    { id: 'd3', title: 'Green Modern Dress', price: '$18.25', image: require('../assets/images/dress girl.png') },
    { id: 'd4', title: 'Elegant Evening Gown', price: '$18.00', image: require('../assets/images/Elegant Gown.png') },
    { id: 'd5', title: 'Soft Glow White Frock', price: '$18.00', image: require('../assets/images/WHITYYY DRESS.png') },
    { id: 'd6', title: 'Soft Glow Pink Frock', price: '$18.00', image: require('../assets/images/pink frock.png') },




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
