import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

export default function LanguageScreen() {
  const [selectedLang, setSelectedLang] = useState('en');

  const languages = [
    { code: 'en', name: 'English (US)', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'si', name: 'සිංහල (Sinhala)', flag: '🇱🇰' }
  ];

  const handleSelect = (code, name) => {
    setSelectedLang(code);
    Alert.alert('Language Updated', `Application language set to ${name}.`);
  };

  return (
    <View style={styles.container}>
      <Header title="Fitty" showBack={true} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Language</Text>
          <Text style={styles.subtitle}>Select your preferred interface language.</Text>
        </View>

        <View style={styles.card}>
          {languages.map((lang, index) => (
            <React.Fragment key={lang.code}>
              <TouchableOpacity 
                style={styles.langItem}
                onPress={() => handleSelect(lang.code, lang.name)}
              >
                <View style={styles.langLeft}>
                  <Text style={styles.flag}>{lang.flag}</Text>
                  <Text style={styles.langName}>{lang.name}</Text>
                </View>
                {selectedLang === lang.code && (
                  <Ionicons name="checkmark-circle" size={24} color="#000" />
                )}
              </TouchableOpacity>
              {index < languages.length - 1 && <View style={styles.divider} />}
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
  langItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 15,
  },
  langLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 22,
    marginRight: 15,
  },
  langName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 15,
  },
});
