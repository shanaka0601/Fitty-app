import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

export default function CurrencyScreen() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'Rs.' }
  ];

  const handleSelect = (code, symbol) => {
    setSelectedCurrency(code);
    Alert.alert('Currency Updated', `Display currency updated to ${code} (${symbol}).`);
  };

  return (
    <View style={styles.container}>
      <Header title="Fitty" showBack={true} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Currency</Text>
          <Text style={styles.subtitle}>Select your preferred display currency.</Text>
        </View>

        <View style={styles.card}>
          {currencies.map((curr, index) => (
            <React.Fragment key={curr.code}>
              <TouchableOpacity 
                style={styles.currItem}
                onPress={() => handleSelect(curr.code, curr.symbol)}
              >
                <View style={styles.currLeft}>
                  <View style={styles.symbolBox}>
                    <Text style={styles.symbolText}>{curr.symbol}</Text>
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.currCode}>{curr.code}</Text>
                    <Text style={styles.currName}>{curr.name}</Text>
                  </View>
                </View>
                {selectedCurrency === curr.code && (
                  <Ionicons name="checkmark-circle" size={24} color="#000" />
                )}
              </TouchableOpacity>
              {index < currencies.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
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
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  currItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  currLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbolBox: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFF2CC',
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  symbolText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  details: {
    justifyContent: 'center',
  },
  currCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  currName: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 15,
  },
});
