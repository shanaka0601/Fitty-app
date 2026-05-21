import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

const PaymentDetailScreen = ({ route, navigation }) => {
  const { method } = route.params || { method: 'PayPal' };

  return (
    <View style={styles.container}>
      <Header title={method} showBack={true} showCart={false} />
      
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons 
            name={method === 'PayPal' ? 'logo-paypal' : 'logo-apple'} 
            size={80} 
            color={method === 'PayPal' ? '#003087' : '#000'} 
          />
        </View>
        
        <Text style={styles.title}>Link your {method} account</Text>
        <Text style={styles.description}>
          Pay faster and more securely by linking your {method} account to Fitty. 
          You can manage your payment settings anytime.
        </Text>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Link Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF0',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  iconContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  linkButton: {
    backgroundColor: '#000',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  linkButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    paddingVertical: 15,
  },
  cancelButtonText: {
    color: '#888',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PaymentDetailScreen;
