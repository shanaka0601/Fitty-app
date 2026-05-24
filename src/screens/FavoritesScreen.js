import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const favoriteProducts = [
  { id: '1', title: 'Pink Spotted Dress', price: '$65.25', image: require('../assets/images/blue frock.png') },
  { id: '2', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },
  { id: '3', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },
  { id: '4', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },
  { id: '5', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },
  { id: '6', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },
  { id: '7', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },
  { id: '8', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },
  { id: '9', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },
  { id: '10', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },
  { id: '11', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },
  { id: '12', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },

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
