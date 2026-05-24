import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const { width } = Dimensions.get('window');

const SaleScreen = ({ navigation }) => {
  // Flash sale ends in 3h45m12s from component mount
  const saleDurationMs = ((3 * 60 + 45) * 60 + 12) * 1000;
  const [timeLeft, setTimeLeft] = useState(saleDurationMs);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const totalSec = Math.max(0, Math.floor(ms / 1000));
    const hrs = String(Math.floor(totalSec / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const calculateDiscountedPrice = (oldPriceStr, discountStr) => {
    if (!oldPriceStr || !discountStr) return null;
    const oldPriceVal = parseFloat(oldPriceStr.replace(/[^0-9.]/g, ''));
    const discountVal = parseFloat(discountStr.replace(/[^0-9.]/g, ''));
    if (isNaN(oldPriceVal) || isNaN(discountVal)) return null;
    const discountedVal = oldPriceVal * (1 - discountVal / 100);
    return `$${discountedVal.toFixed(2)}`;
  };

  const saleProducts = [
    { id: '1', title: 'Summer Floral Dress', price: '$45.00', oldPrice: '$40.00', image: require('../assets/images/Summer FloralDress.png'), discount: '30% OFF' },
    { id: '2', title: 'Elegant Evening Gown', price: '$75.00', oldPrice: '$30.00', image: require('../assets/images/Elegant Gown.png'), discount: '40% OFF' },
    { id: '3', title: 'Casual Crop Top', price: '$20.00', oldPrice: '$22.00', image: require('../assets/images/Casual Crop Top.png'), discount: '20% OFF' },
    { id: '4', title: 'Boho Style Skirt', price: '$35.00', oldPrice: '$30.00', image: require('../assets/images/Boho Style Skirt.png'), discount: '30% OFF' },
    { id: '5', title: 'Black Shirt', price: '$45.00', oldPrice: '$30.00', image: require('../assets/images/Black Shirt.png'), discount: '40% OFF' },
    { id: '6', title: 'Essential Spring Skirt', price: '$50.00', oldPrice: '$30.00', image: require('../assets/images/Essential Spring Skirt with Casual shirt.png'), discount: '25% OFF' },
    { id: '7', title: 'Pink Spotted Dress', price: '$25.50', oldPrice: '$29.71', image: require('../assets/images/pink spotted dress.png'), discount: '15% OFF' },
    { id: '8', title: 'Red Croptop', price: '$21.00', oldPrice: '$30.00', image: require('../assets/images/red croptop.png'), discount: '30% OFF' },
    { id: '9', title: 'White Long sleeved T Shirt', price: '$12.25', oldPrice: '$25.00', image: require('../assets/images/white ts.png'), discount: '50% OFF' },
    { id: '10', title: 'Blue Long sleeved T Shirt', price: '$12.25', oldPrice: '$25.00', image: require('../assets/images/Blue ts.png'), discount: '50% OFF' },
  ].map(item => {
    const originalPrice = item.oldPrice || item.oldprice;
    const computedPrice = calculateDiscountedPrice(originalPrice, item.discount);
    return {
      ...item,
      oldPrice: originalPrice,
      price: computedPrice || item.price,
    };
  });

  return (
    <View style={styles.container}>
      <Header title="Flash Sale" showBack={true} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.banner}>
          <Image
            source={require('../assets/images/front page.png')}
            style={styles.bannerImage}
          />
          <View style={styles.overlay}>
            <Text style={styles.bannerTitle}>MID-SEASON SALE</Text>
            <Text style={styles.bannerDiscount}>UP TO 50% OFF</Text>
            <View style={styles.timerBox}>
              <Text style={styles.timerText}>Ends in {formatTime(timeLeft)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offers</Text>
          <Text style={styles.itemCount}>{saleProducts.length} items</Text>
        </View>

        <View style={styles.grid}>
          {saleProducts.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
              image={item.image}
              discount={item.discount}
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
  banner: {
    width: width,
    height: 250,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  bannerDiscount: {
    color: '#FFDD67',
    fontSize: 40,
    fontWeight: '900',
    marginVertical: 10,
  },
  timerBox: {
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
  timerText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  itemCount: {
    fontSize: 14,
    color: '#888',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default SaleScreen;
