import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params || { product: { title: 'Office Type Outfit', price: '$58.25', image: null } };
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState('M');
  const [isFavorite, setIsFavorite] = useState(false);

  const images = product.image ? [product.image, product.image, product.image] : [
    'https://images.unsplash.com/photo-1539109132314-34759616717d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <View style={styles.container}>
      <Header 
        title={product.title} 
        showBack={true} 
        rightIcon={isFavorite ? "heart" : "heart-outline"}
        onRightPress={() => setIsFavorite(!isFavorite)}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Image Carousel */}
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={typeof item === 'string' ? { uri: item } : item} style={styles.productImage} />
          )}
          style={styles.carousel}
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>
            {product.description || "A young woman wears an elegant blue maxi dress with soft puff sleeves and a flowing tiered skirt. The vibrant blue fabric creates a graceful, romantic look in warm natural light."}
          </Text>

          <View style={styles.stockContainer}>
            <View style={styles.stockDot} />
            <Text style={styles.stockText}>In Stock</Text>
          </View>

          <View style={styles.sizeSection}>
            <View style={styles.sizeHeader}>
              <Text style={styles.sizeLabel}>Sizes</Text>
              <Text style={styles.selectSizes}>Select Sizes</Text>
            </View>
            <View style={styles.sizeGrid}>
              {sizes.map(size => (
                <TouchableOpacity 
                  key={size}
                  onPress={() => setSelectedSize(size)}
                  style={[
                    styles.sizeBox,
                    selectedSize === size && styles.selectedSizeBox
                  ]}
                >
                  <Text style={[
                    styles.sizeText,
                    selectedSize === size && styles.selectedSizeText
                  ]}>{size}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity style={styles.addToCartButton} onPress={() => {/* TODO: add to cart logic */}}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buyNowButton} onPress={() => navigation.navigate('BuyNow', { product })}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF0', // Light cream background as in images
  },
  scrollContent: {
    paddingBottom: 100,
  },
  carousel: {
    height: 400,
  },
  productImage: {
    width: width * 0.7,
    height: 400,
    borderRadius: 30,
    marginHorizontal: width * 0.15,
  },
  detailsContainer: {
    padding: 25,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#000',
    lineHeight: 22,
    marginBottom: 10,
    fontWeight: '500',
  },
  stockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  stockDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00FF00',
    marginRight: 10,
  },
  stockText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  sizeSection: {
    marginTop: 20,
  },
  sizeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sizeLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  selectSizes: {
    fontSize: 12,
    color: '#888',
  },
  sizeGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeBox: {
    width: (width - 80) / 5,
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedSizeBox: {
    backgroundColor: '#FFF2CC',
  },
  sizeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  selectedSizeText: {
    color: '#000',
  },
  addToCartButton: {
    backgroundColor: '#FF9500', // changed from yellow to orange
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    elevation: 5,
  },
  addToCartText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF', // white text for contrast
  },
  buyNowButton: {
    backgroundColor: '#000', // black button
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 5,
  },
  buyNowText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF', // white text
  },

});

export default ProductDetailsScreen;
