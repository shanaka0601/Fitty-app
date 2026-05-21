import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  { id: '1', title: 'Pink Spotted Dress', price: '$65.25', image: require('../assets/images/blue frock.png') },
  { id: '2', title: 'Red Long Dress', price: '$65.25', image: require('../assets/images/Red frock.png') },
  { id: '3', title: 'Light Blue Dress', price: '$50.25', image: require('../assets/images/blue frock detail.png') },
  { id: '4', title: 'Red Crop Top', price: '$40.25', image: require('../assets/images/welcome.png') },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header 
        onMenuPress={() => navigation.navigate('Categories')} 
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.banner}>
          <Image 
            source={require('../assets/images/front page.png')} 
            style={styles.bannerImage} 
          />
          <View style={styles.bannerContent}>
            <Text style={styles.bannerText}>Get Your special</Text>
            <Text style={styles.bannerText}>
              sale up to <Text style={styles.bannerHighlight}>50%</Text>
            </Text>
            <TouchableOpacity 
              style={styles.shopNowBtn}
              onPress={() => navigation.navigate('Sale')}
            >
              <Text style={styles.shopNowText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Product Grid */}
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
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 25,
    backgroundColor: '#EAEAEA',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bannerContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  bannerText: {
    fontSize: 22,
    color: '#000',
    fontWeight: '400',
  },
  bannerHighlight: {
    fontWeight: '900',
  },
  shopNowBtn: {
    backgroundColor: '#000',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 15,
  },
  shopNowText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});
