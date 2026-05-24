import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  { id: '1', title: 'Pink Spotted Dress', price: '$25.25', image: require('../assets/images/pink spotted dress.png'), discount: '15% OFF' },
  { id: '2', title: 'Red Long Dress', price: '$20.25', image: require('../assets/images/Red frock.png') },
  { id: '3', title: 'Light Blue Dress', price: '$20.25', image: require('../assets/images/blue frock detail.png') },
  { id: '4', title: 'Red Crop Top', price: '$30.00', image: require('../assets/images/red croptop.png'), discount: '30% OFF' },
  { id: '5', title: 'Black Shirt', price: '$30.00', image: require('../assets/images/Black Shirt.png'), discount: '40% OFF' },
  { id: '6', title: 'Essential Spring Skirt', price: '$30.00', image: require('../assets/images/Essential Spring Skirt with Casual shirt.png'), discount: '25% OFF' },
  { id: '7', title: 'Blue Long sleeved T Shirt', price: '$25.00', image: require('../assets/images/Blue ts.png'), discount: '50% OFF' },
  { id: '8', title: 'White Long sleeved T Shirt', price: '$25.00', image: require('../assets/images/white ts.png'), discount: '50% OFF' },
  { id: '9', title: 'Red Saree', price: '$26.00', image: require('../assets/images/Red saree.png') },
  { id: '10', title: 'Brown Short Skirt', price: '$18.00', image: require('../assets/images/Brown short.png') },
  { id: '11', title: 'Office Wear', price: '$16.00', image: require('../assets/images/Office Wear.png'), description: 'Elevate your everyday workwear with this elegant beige tailored office set, featuring a structured blazer and high-waisted trousers paired with a soft white inner top. Designed for comfort and sophistication, this timeless look brings effortless confidence to your professional wardrobe.' },
  { id: '12', title: 'Office Wear', price: '$16.00', image: require('../assets/images/OFFICE Wear copy.png'), description: 'Elevate your everyday workwear with this elegant beige tailored office set, featuring a structured blazer and high-waisted trousers paired with a soft white inner top. Designed for comfort and sophistication, this timeless look brings effortless confidence to your professional wardrobe.' },

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
            <Text style={styles.bannerText}>GET YOUR SPECIAL SALE UP TO <Text style={styles.bannerHighlight}>50%</Text></Text>
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
              discount={item.discount}
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
              onBuyNow={() => navigation.navigate('BuyNow', { product: item })}
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
    paddingHorizontal: 10,
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
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: '800',
    textAlign: 'center',
  },
  bannerHighlight: {
    fontWeight: '900',
  },
  shopNowBtn: {
    backgroundColor: '#000',
    alignSelf: 'center',
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
    justifyContent: 'space-around',
  }
});
