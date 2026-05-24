import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCard({
  image,
  title,
  price,
  oldPrice,
  discount,
  onPress,
  style,
  isFavorite = false,
  onToggleFavorite = () => {},
  onAddToCart = () => {},
  onBuyNow = () => {},
}) {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress} activeOpacity={0.9}>
      <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.image} />
      
      {discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountBadgeText}>{discount}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.favoriteBtn} onPress={onToggleFavorite}>
        <Ionicons name="heart" size={24} color={isFavorite ? 'red' : 'white'} />
      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          {oldPrice && <Text style={styles.oldPrice}>{oldPrice}</Text>}
          {discount && <Text style={styles.discountText}>{discount}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
  },
  favoriteBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  cartBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 5,
    // background removed for cleaner white cart icon
    // backgroundColor: '#000',
    borderRadius: 12,
  },
  buyNowBtn: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    padding: 5,
    backgroundColor: '#000',
    borderRadius: 12,
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  oldPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
    marginLeft: 6,
    textAlign: 'center',
  },
  discountText: {
    fontSize: 12,
    color: '#FF3B30',
    fontWeight: 'bold',
    marginLeft: 6,
    textAlign: 'center',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  discountBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
