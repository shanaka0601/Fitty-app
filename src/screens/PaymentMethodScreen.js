import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Header from '../components/Header';

import { useNavigation } from '@react-navigation/native';

const PaymentMethodScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Fitty" showBack={true} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Payment Method</Text>
          <Text style={styles.subtitle}>Manage your secure payment options</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SAVED CARDS</Text>
          
          {/* Visa Card */}
          <View style={[styles.card, styles.visaCard]}>
            <View style={styles.cardHeader}>
              <View style={styles.visaBadge}>
                <Text style={styles.visaText}>VISA</Text>
              </View>
              <Ionicons name="checkmark-circle" size={24} color="#FFF2CC" />
            </View>
            <Text style={styles.cardNumber}>••••  ••••  ••••  4242</Text>
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.cardLabel}>CARD HOLDER</Text>
                <Text style={styles.cardInfo}>ALEX RIVERA</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.cardLabel}>EXPIRES</Text>
                <Text style={styles.cardInfo}>12/26</Text>
              </View>
            </View>
          </View>

          {/* Mastercard */}
          <View style={[styles.card, styles.masterCard]}>
             <View style={styles.cardHeader}>
                <View style={styles.mcBadge}>
                   <Text style={styles.mcText}>MC</Text>
                </View>
                <Ionicons name="ellipsis-vertical" size={20} color="#888" />
             </View>
             <View style={styles.mcContent}>
                <Text style={styles.cardNumberSmall}>•••• 8812</Text>
                <Text style={styles.cardLabelSmall}>Expires 09/25</Text>
             </View>
          </View>

          <TouchableOpacity 
            style={styles.addCardButton}
            onPress={() => navigation.navigate('AddCard')}
          >
            <Ionicons name="card-outline" size={24} color="#000" />
            <Text style={styles.addCardText}>Add New Card</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ALTERNATIVE METHODS</Text>
          
          <TouchableOpacity 
            style={styles.altMethod}
            onPress={() => navigation.navigate('PaymentDetail', { method: 'PayPal' })}
          >
             <View style={styles.altIconBox}>
                <Ionicons name="logo-paypal" size={24} color="#003087" />
             </View>
             <Text style={styles.altText}>PayPal</Text>
             <Ionicons name="chevron-forward" size={20} color="#CCC" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.altMethod}
            onPress={() => navigation.navigate('PaymentDetail', { method: 'Apple Pay' })}
          >
             <View style={styles.altIconBox}>
                <Ionicons name="logo-apple" size={24} color="#000" />
             </View>
             <Text style={styles.altText}>Apple Pay</Text>
             <Ionicons name="chevron-forward" size={20} color="#CCC" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  headerSection: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    marginBottom: 15,
    letterSpacing: 1,
  },
  card: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  visaCard: {
    backgroundColor: '#FFF2CC', // Cream background for the "selected" card in image
    // Note: The image shows a dark visa badge but the card itself is cream-ish
  },
  masterCard: {
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  visaBadge: {
    backgroundColor: '#222',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  visaText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  mcBadge: {
    backgroundColor: '#444',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
  },
  mcText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 10,
  },
  cardNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 25,
    letterSpacing: 2,
  },
  cardNumberSmall: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    fontSize: 10,
    color: '#888',
    marginBottom: 5,
  },
  cardLabelSmall: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  cardInfo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  mcContent: {
    marginTop: 10,
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#DDD',
    borderStyle: 'dashed',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
  },
  addCardText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  altMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  altIconBox: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  altText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});

export default PaymentMethodScreen;
