import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const navigation = useNavigation();

  const SettingItem = ({ icon, title, subtitle, onPress, type = "link", value }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={[styles.iconBox, { backgroundColor: '#FDFBF0' }]}>
        <Ionicons name={icon} size={22} color="#8B7E5D" />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        {subtitle && <Text style={styles.itemSubtitle}>{subtitle}</Text>}
      </View>
      {type === "link" && <Ionicons name="chevron-forward" size={20} color="#CCC" />}
      {type === "switch" && (
        <Switch 
          value={value} 
          onValueChange={onPress}
          trackColor={{ false: "#DDD", true: "#8B7E5D" }}
          thumbColor={value ? "#FFF" : "#FFF"}
        />
      )}
      {type === "text" && <Text style={styles.itemValue}>{value}</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Fitty" onMenuPress={() => {}} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.subtitle}>Manage your account and preferences.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACCOUNT SETTINGS</Text>
          <SettingItem 
            icon="notifications-outline" 
            title="Notifications" 
            subtitle="Sale alerts and order updates" 
            type="switch"
            value={notifications}
            onPress={() => setNotifications(!notifications)}
          />
          <SettingItem 
            icon="lock-closed-outline" 
            title="Privacy" 
            subtitle="Manage your data sharing" 
            onPress={() => navigation.navigate('Privacy')}
          />
          <SettingItem 
            icon="shield-checkmark-outline" 
            title="Security" 
            subtitle="Password and biometrics" 
            onPress={() => navigation.navigate('Security')}
          />
        </View>

        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }} 
          style={styles.bannerImage}
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PREFERENCES</Text>
          <SettingItem 
            icon="globe-outline" 
            title="Language" 
            type="text"
            value="English (US)"
            onPress={() => navigation.navigate('Language')}
          />
          <SettingItem 
            icon="cash-outline" 
            title="Currency" 
            type="text"
            value="USD ($)"
            onPress={() => navigation.navigate('Currency')}
          />
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
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
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
    marginBottom: 10,
    letterSpacing: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  itemValue: {
    fontSize: 14,
    color: '#666',
  },
  bannerImage: {
    width: '90%',
    height: 150,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default SettingsScreen;
