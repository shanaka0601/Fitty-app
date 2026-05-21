import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCard({
  image,
  title,
  price,
  onPress,
  discount,
  style,
  isFavorite = false,
  onToggleFavorite = () => {},
  onAddToCart = () => {},
}) {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress} activeOpacity={0.9}>
      <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.image} />
      {discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{discount}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.favoriteBtn} onPress={onToggleFavorite}>
        <Ionicons name="heart" size={24} color={isFavorite ? 'red' : 'white'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cartBtn} onPress={onAddToCart}>
        <Ionicons name="cart" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#FFF2CC',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    zIndex: 1,
  },
  discountText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
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
    backgroundColor: '#000',
    borderRadius: 12,
  },
  info: {
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
  },
  price: {
    fontSize: 14,
    color: '#000',
  },
});
