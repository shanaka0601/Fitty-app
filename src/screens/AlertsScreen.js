import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

const AlertsScreen = () => {
  const alerts = [
    { id: '1', title: 'Order Shipped!', description: 'Your order #12345 has been shipped and is on its way.', time: '2h ago', icon: 'cube-outline', color: '#4CAF50' },
    { id: '2', title: 'Flash Sale Alert!', description: 'Get 50% off on all summer dresses for the next 4 hours.', time: '5h ago', icon: 'flash-outline', color: '#FF9800' },
    { id: '3', title: 'Payment Successful', description: 'Your payment for order #12344 has been processed.', time: '1d ago', icon: 'card-outline', color: '#2196F3' },
    { id: '4', title: 'New Arrival', description: 'Check out the new Office Type Outfit collection.', time: '2d ago', icon: 'shirt-outline', color: '#9C27B0' },
    { id: '5', title: 'Ready to Ship!', description: 'Your order #12445 has been packed and now it is ready to ship.', time: '5h ago', icon: 'cube-outline', color: '#2b09c3ff' },

  ];

  return (
    <View style={styles.container}>
      <Header title="Alerts" showBack={true} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Recent Alerts</Text>
          <Text style={styles.subtitle}>Stay updated with your orders and offers.</Text>
        </View>

        {alerts.map((alert) => (
          <TouchableOpacity key={alert.id} style={styles.alertCard}>
            <View style={[styles.iconBox, { backgroundColor: alert.color + '20' }]}>
              <Ionicons name={alert.icon} size={24} color={alert.color} />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.titleRow}>
                <Text style={styles.alertTitle}>{alert.title}</Text>
                <Text style={styles.alertTime}>{alert.time}</Text>
              </View>
              <Text style={styles.alertDescription}>{alert.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
    padding: 20,
  },
  headerSection: {
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  alertCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  alertTime: {
    fontSize: 12,
    color: '#999',
  },
  alertDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
});

export default AlertsScreen;
