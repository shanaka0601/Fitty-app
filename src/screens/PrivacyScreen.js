import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

export default function PrivacyScreen() {
  const [personalizedAds, setPersonalizedAds] = useState(true);
  const [dataCollection, setDataCollection] = useState(false);
  const [locationServices, setLocationServices] = useState(true);

  const PolicySection = ({ title, content }) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionContent}>{content}</Text>
    </View>
  );

  const ToggleItem = ({ title, description, value, onValueChange }) => (
    <View style={styles.toggleItem}>
      <View style={styles.toggleTextContainer}>
        <Text style={styles.toggleTitle}>{title}</Text>
        <Text style={styles.toggleDescription}>{description}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#DDD", true: "#8B7E5D" }}
        thumbColor="#FFF"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Fitty" showBack={true} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Privacy Settings</Text>
          <Text style={styles.subtitle}>Control your personal data sharing policies.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardHeader}>DATA PREFERENCES</Text>
          
          <ToggleItem
            title="Personalized Ads"
            description="Allow us to show you ads tailored specifically to your styles and interests."
            value={personalizedAds}
            onValueChange={setPersonalizedAds}
          />
          
          <View style={styles.cardDivider} />

          <ToggleItem
            title="Usage Analytics"
            description="Share anonymous usage logs with us to help improve performance and resolve bugs."
            value={dataCollection}
            onValueChange={setDataCollection}
          />
          
          <View style={styles.cardDivider} />

          <ToggleItem
            title="Location Access"
            description="Provide approximate location for accurate delivery address autocompletion."
            value={locationServices}
            onValueChange={setLocationServices}
          />
        </View>

        <View style={styles.policyCard}>
          <Text style={styles.policyHeader}>PRIVACY POLICY SNAPSHOT</Text>
          
          <PolicySection
            title="1. Personal Information We Collect"
            content="We collect details like full name, shipping address, email addresses, and payment references when processing checkout orders to verify deliveries."
          />

          <PolicySection
            title="2. Secure Encryption Standards"
            content="Your credit card credentials are never stored locally. We use secure PCI-DSS tokenization pipelines in partnership with top global payment processors."
          />

          <PolicySection
            title="3. Third-party Sharing Policies"
            content="We do not trade, lease, or distribute your email addresses or private order histories to any external marketing agencies under any conditions."
          />
        </View>

        <Text style={styles.footerText}>Last updated: March 2026</Text>
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
    padding: 20,
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  cardHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 15,
    letterSpacing: 1,
  },
  toggleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  toggleTextContainer: {
    flex: 1,
    paddingRight: 20,
  },
  toggleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  toggleDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 3,
    lineHeight: 16,
  },
  cardDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: 5,
  },
  policyCard: {
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
  policyHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 15,
    letterSpacing: 1,
  },
  sectionContainer: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
  },
});
