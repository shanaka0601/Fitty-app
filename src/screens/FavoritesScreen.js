import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const favoriteProducts = [
  { id: '1', title: 'Pink Spotted Dress', price: '$25.25', image: require('../assets/images/pink spotted dress.png'), discount: '15% OFF' },
  { id: '2', title: 'Red Long Dress', price: '$20.25', image: require('../assets/images/Red frock.png') },
  { id: '3', title: 'Light Blue Dress', price: '$20.25', image: require('../assets/images/blue frock detail.png') },
  { id: '4', title: 'Red Crop Top', price: '$21.00', image: require('../assets/images/red croptop.png'), discount: '30% OFF' },
  { id: '5', title: 'Black Shirt', price: '$18.00', image: require('../assets/images/Black Shirt.png'), discount: '40% OFF' },
  { id: '6', title: 'Essential Spring Skirt', price: '$22.50', image: require('../assets/images/Essential Spring Skirt with Casual shirt.png'), discount: '25% OFF' },
  { id: '7', title: 'Blue Long sleeved T Shirt', price: '$12.50', image: require('../assets/images/Blue ts.png'), discount: '50% OFF' },
  { id: '8', title: 'White Long sleeved T Shirt', price: '$12.50', image: require('../assets/images/white ts.png'), discount: '50% OFF' },
  { id: '9', title: 'Red Saree', price: '$26.00', image: require('../assets/images/Red saree.png') },
  { id: '10', title: 'Brown Short Skirt', price: '$18.00', image: require('../assets/images/Brown short.png') },
  { id: '11', title: 'Office Wear', price: '$16.00', image: require('../assets/images/Office Wear.png'), description: 'Elevate your everyday workwear with this elegant beige tailored office set, featuring a structured blazer and high-waisted trousers paired with a soft white inner top. Designed for comfort and sophistication, this timeless look brings effortless confidence to your professional wardrobe.' },


];

export default function FavoritesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header title="Favorites" showBack={true} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.productGrid}>
          {favoriteProducts.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              discount={item.discount}
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF0',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});
