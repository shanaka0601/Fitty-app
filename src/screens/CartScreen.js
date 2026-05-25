import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

export default function CartScreen({ navigation }) {
  const [items, setItems] = useState([
    { id: '1', title: 'Light Blue Dress', price: 20.25, size: 'M', qty: 1, image: require('../assets/images/blue frock detail.png') },
    { id: '2', title: 'Red Long Dress', price: 25.25, size: 'S', qty: 1, image: require('../assets/images/Red frock.png') },
  ]);

  const handleIncrease = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newQty = item.qty - 1;
          return newQty > 0 ? { ...item, qty: newQty } : null;
        }
        return item;
      }).filter(Boolean)
    );
  };

  const shipping = 5.00;
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const total = subtotal > 0 ? subtotal + shipping : 0;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header title="My Cart" showBack={true} showCart={false} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {items.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="bag-handle-outline" size={80} color="#CCC" style={{ marginBottom: 20 }} />
            <Text style={styles.emptyText}>Your cart is empty</Text>
            <TouchableOpacity
              style={styles.shopBtn}
              onPress={() => navigation.navigate('Main')}
            >
              <Text style={styles.shopBtnText}>Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {items.map((item) => (
              <View key={item.id} style={styles.cartItem}>
                <Image source={item.image} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSize}>Size: {item.size}</Text>
                  <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                </View>
                <View style={styles.qtyContainer}>
                  <TouchableOpacity style={styles.qtyBtn} onPress={() => handleDecrease(item.id)}>
                    <Ionicons name="remove" size={16} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{item.qty}</Text>
                  <TouchableOpacity style={styles.qtyBtn} onPress={() => handleIncrease(item.id)}>
                    <Ionicons name="add" size={16} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}

            <View style={styles.totalSection}>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Subtotal</Text>
                <Text style={styles.totalValue}>${subtotal.toFixed(2)}</Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Shipping</Text>
                <Text style={styles.totalValue}>${shipping.toFixed(2)}</Text>
              </View>
              <View style={[styles.totalRow, styles.grandTotalRow]}>
                <Text style={styles.grandTotalLabel}>Total</Text>
                <Text style={styles.grandTotalValue}>${total.toFixed(2)}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.checkoutBtn}
              onPress={() => navigation.navigate('PaymentMethod')}
            >
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </>
        )}
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
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  itemSize: {
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF2CC',
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  qtyBtn: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  qtyText: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  totalSection: {
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 15,
    color: '#666',
  },
  totalValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  grandTotalRow: {
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  grandTotalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  grandTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  checkoutBtn: {
    backgroundColor: '#000',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    fontWeight: '500',
    marginBottom: 25,
  },
  shopBtn: {
    backgroundColor: '#000',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
  },
  shopBtnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  }
});
