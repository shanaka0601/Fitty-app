import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function MyOrdersScreen() {
  const navigation = useNavigation();

  const orders = [
    {
      id: 'FTY-98241',
      date: 'May 18, 2026',
      status: 'Shipped',
      statusColor: '#FF9800',
      total: '$120.50',
      items: '2 items',
      tracking: 'USPS: 9400111899562718'
    },
    {
      id: 'FTY-87152',
      date: 'April 24, 2026',
      status: 'Delivered',
      statusColor: '#4CAF50',
      total: '$65.25',
      items: '1 item',
      tracking: 'USPS: 9400111899562215'
    },
    {
      id: 'FTY-65239',
      date: 'March 10, 2026',
      status: 'Delivered',
      statusColor: '#4CAF50',
      total: '$215.00',
      items: '4 items',
      tracking: 'UPS: 1Z999AA101234567'
    }
  ];

  return (
    <View style={styles.container}>
      <Header title="Fitty" showBack={true} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>My Orders</Text>
          <Text style={styles.subtitle}>Track and manage your order history.</Text>
        </View>

        {orders.map((order) => (
          <View key={order.id} style={styles.orderCard}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.orderId}>{order.id}</Text>
                <Text style={styles.orderDate}>{order.date}</Text>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: order.statusColor + '15' }]}>
                <View style={[styles.statusDot, { backgroundColor: order.statusColor }]} />
                <Text style={[styles.statusText, { color: order.statusColor }]}>{order.status}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.cardDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Quantity:</Text>
                <Text style={styles.detailValue}>{order.items}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Total Amount:</Text>
                <Text style={styles.grandTotal}>{order.total}</Text>
              </View>
              {order.tracking && (
                <View style={styles.trackingRow}>
                  <Ionicons name="location-outline" size={16} color="#666" />
                  <Text style={styles.trackingText}>{order.tracking}</Text>
                </View>
              )}
            </View>

            <TouchableOpacity 
              style={styles.detailsBtn}
              onPress={() => navigation.navigate('ComingSoon', { title: 'Order Details' })}
            >
              <Text style={styles.detailsBtnText}>View Details</Text>
              <Ionicons name="arrow-forward-outline" size={16} color="#000" />
            </TouchableOpacity>
          </View>
        ))}
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
    paddingBottom: 40,
  },
  headerSection: {
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  orderCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  orderDate: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: 15,
  },
  cardDetails: {
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  grandTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  trackingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#FDFBF0',
    padding: 10,
    borderRadius: 10,
  },
  trackingText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 6,
    fontWeight: '500',
  },
  detailsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 12,
    paddingVertical: 12,
    backgroundColor: '#FFF2CC',
  },
  detailsBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 6,
  },
});
