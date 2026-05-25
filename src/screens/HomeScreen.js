import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  { id: '1', title: 'Pink Spotted Dress', price: '$25.25', image: require('../assets/images/pink spotted dress.png'), discount: '15% OFF', description: "A charming pink spotted dress designed with a playful yet elegant touch, perfect for casual outings and summer days " },
  { id: '2', title: 'Sunset Orange blouse', price: '$14.00', image: require('../assets/images/Orange shirt.png'), description: 'A bold oversized orange shirt with a soft lightweight fabric, full sleeves, and an open-collar design, perfect for a modern chic and elegant look.' },
  { id: '3', title: 'Light Blue Dress', price: '$20.25', image: require('../assets/images/blue frock detail.png'), description: " A graceful light blue dress designed with delicate details, offering a fresh and elegant look perfect for daytime occasions." },
  { id: '4', title: 'Red Crop Top', price: '$30.00', image: require('../assets/images/red croptop.png'), discount: '30% OFF', description: " A stylish red crop top that combines modern trends with a classic appeal, featuring a flattering fit and a vibrant hue perfect for making a bold fashion statement" },
  { id: '5', title: 'Black Shirt', price: '$30.00', image: require('../assets/images/Black Shirt.png'), discount: '40% OFF', description: "A stylish long-sleeved black shirt crafted for a modern and versatile look, suitable for both casual and formal wear,Its sleek design and comfortable fit make it a timeless wardrobe essential for any occasion" },
  { id: '6', title: 'Essential Spring Skirt', price: '$30.00', image: require('../assets/images/Essential Spring Skirt with Casual shirt.png'), discount: '25% OFF', description: "A timeless and versatile piece, this essential spring skirt is designed with a flattering silhouette and premium fabric, perfect for effortlessly elevating your everyday style" },
  { id: '7', title: 'Blue Long sleeved T Shirt', price: '$25.00', image: require('../assets/images/Blue ts.png'), discount: '50% OFF', description: " A blue long-sleeved t-shirt designed for a modern and casual look, featuring a comfortable fit and a classic style suitable for everyday wear" },
  { id: '8', title: 'White Long sleeved T Shirt', price: '$25.00', image: require('../assets/images/white ts.png'), discount: '50% OFF', description: " A white long-sleeved t-shirt designed for a modern and casual look, featuring a comfortable fit and a classic style suitable for everyday wear" },
  { id: '9', title: 'Red Saree', price: '$26.00', image: require('../assets/images/Red saree.png'), description: " A red saree designed for a modern and elegant look, featuring a comfortable fit and a classic style suitable for everyday wear" },
  { id: '10', title: 'Brown Short Skirt', price: '$18.00', image: require('../assets/images/Brown short.png'), description: " A brown short skirt designed for a modern and casual look, featuring a comfortable fit and a classic style suitable for everyday wear" },
  { id: '11', title: 'Office Wear', price: '$16.00', image: require('../assets/images/Office Wear.png'), description: 'Elevate your everyday workwear with this elegant beige tailored office set, featuring a structured blazer and high-waisted trousers paired with a soft white inner top. Designed for comfort and sophistication, this timeless look brings effortless confidence to your professional wardrobe.' },
  { id: '12', title: 'Office Wear', price: '$16.00', image: require('../assets/images/OFFICE Wear copy.png'), description: 'Elevate your everyday workwear with this elegant beige tailored office set, featuring a structured blazer and high-waisted trousers paired with a soft white inner top. Designed for comfort and sophistication, this timeless look brings effortless confidence to your professional wardrobe.' },
  { id: '13', title: 'Summer Floral Dress', price: '$28.00', oldPrice: '$40.00', image: require('../assets/images/Summer FloralDress.png'), discount: '30% OFF', description: "A timeless and versatile piece, this essential Summer Floral dress is designed with a flattering silhouette and premium fabric, perfect for effortlessly elevating your everyday style" },
  { id: '14', title: 'Elegant Evening Gown', price: '$18.00', oldPrice: '$30.00', image: require('../assets/images/Elegant Gown.png'), discount: '40% OFF', description: "  This essential Elegant Gown is designed with a flattering silhouette and premium fabric, perfect for effortlessly elevating your everyday style" },
  { id: '15', title: 'Casual Crop Top', price: '$17.00', oldPrice: '$22.00', image: require('../assets/images/Casual Crop Top.png'), discount: '20% OFF', description: " A Casual Crop Top designed with a flattering silhouette and premium fabric, perfect for effortlessly elevating your everyday style" },
  { id: '16', title: 'Boho Style Skirt', price: '$21.00', oldPrice: '$30.00', image: require('../assets/images/Boho Style Skirt.png'), discount: '30% OFF', description: " A Boho Style Skirt designed with a flattering silhouette and premium fabric, perfect for effortlessly elevating your everyday style" },
  { id: '17', title: 'Red Long Dress', price: '$20.25', image: require('../assets/images/Red frock.png'), description: "A vibrant red long dress that brings a bold and graceful presence, perfect for making a confident fashion statement " },
  { id: '18', title: 'Soft Glow White Frock', price: '$18.00', image: require('../assets/images/WHITYYY DRESS.png'), description: "A soft white frock with a simple elegant design, created for a modern and feminine fashion look. Its smooth flowing fabric and stylish fit bring a graceful and charming appearance." },
  { id: '19', title: 'Soft Glow Pink Frock', price: '$18.00', image: require('../assets/images/pink frock.png'), description: "A soft pink frock with a simple elegant design, created for a modern and feminine fashion look. Its smooth flowing fabric and stylish fit bring a graceful and charming appearance." },
  { id: '20', title: 'Green Glow Outfit', price: '$16.00', image: require('../assets/images/Green Glow Outfit.png'), description: " A Green Glow Outfit designed with a flattering silhouette and premium fabric, perfect for effortlessly elevating your everyday style" },

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
