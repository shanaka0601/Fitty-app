import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

const AddCardScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Header title="Add New Card" showBack={true} showCart={false} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.cardPreview}>
          <View style={styles.visaBadge}>
            <Text style={styles.visaText}>VISA</Text>
          </View>
          <Text style={styles.previewNumber}>
            {cardNumber || '••••  ••••  ••••  ••••'}
          </Text>
          <View style={styles.previewFooter}>
            <View>
              <Text style={styles.previewLabel}>CARD HOLDER</Text>
              <Text style={styles.previewInfo}>{name || 'YOUR NAME'}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.previewLabel}>EXPIRES</Text>
              <Text style={styles.previewInfo}>{expiry || 'MM/YY'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Card Number</Text>
            <TextInput 
              style={styles.input}
              placeholder="0000 0000 0000 0000"
              keyboardType="numeric"
              value={cardNumber}
              onChangeText={setCardNumber}
              maxLength={16}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Card Holder Name</Text>
            <TextInput 
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
              <Text style={styles.inputLabel}>Expiry Date</Text>
              <TextInput 
                style={styles.input}
                placeholder="MM/YY"
                keyboardType="numeric"
                value={expiry}
                onChangeText={setExpiry}
                maxLength={5}
              />
            </View>
            <View style={[styles.inputGroup, { flex: 1, marginLeft: 10 }]}>
              <Text style={styles.inputLabel}>CVV</Text>
              <TextInput 
                style={styles.input}
                placeholder="000"
                keyboardType="numeric"
                secureTextEntry
                value={cvv}
                onChangeText={setCvv}
                maxLength={3}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Card</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  cardPreview: {
    backgroundColor: '#222',
    borderRadius: 20,
    padding: 25,
    height: 200,
    justifyContent: 'space-between',
    marginBottom: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  visaBadge: {
    backgroundColor: '#FFF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  visaText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  previewNumber: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginVertical: 20,
  },
  previewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previewLabel: {
    color: '#888',
    fontSize: 10,
    marginBottom: 5,
  },
  previewInfo: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  form: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#000',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  row: {
    flexDirection: 'row',
  },
  saveButton: {
    backgroundColor: '#FFDD67',
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default AddCardScreen;
