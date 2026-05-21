import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import CustomInput from '../components/CustomInput';

export default function SecurityScreen() {
  const [biometrics, setBiometrics] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all details.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New passwords do not match.');
      return;
    }
    Alert.alert('Success', 'Your password has been changed successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <View style={styles.container}>
      <Header title="Fitty" showBack={true} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Security</Text>
          <Text style={styles.subtitle}>Protect your account credentials and login methods.</Text>
        </View>

        {/* Biometrics */}
        <View style={styles.card}>
          <Text style={styles.cardHeader}>ACCESS METHODS</Text>
          <View style={styles.toggleItem}>
            <View style={styles.toggleTextContainer}>
              <Text style={styles.toggleTitle}>Biometric Authentication</Text>
              <Text style={styles.toggleDescription}>Use Face ID or Fingerprint scanner for quick and secure logins.</Text>
            </View>
            <Switch
              value={biometrics}
              onValueChange={setBiometrics}
              trackColor={{ false: "#DDD", true: "#8B7E5D" }}
              thumbColor="#FFF"
            />
          </View>
        </View>

        {/* Change Password Form */}
        <View style={styles.card}>
          <Text style={styles.cardHeader}>CHANGE PASSWORD</Text>
          
          <CustomInput 
            label="Current Password" 
            placeholder="••••••••" 
            secureTextEntry 
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
          <CustomInput 
            label="New Password" 
            placeholder="••••••••" 
            secureTextEntry 
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <CustomInput 
            label="Confirm New Password" 
            placeholder="••••••••" 
            secureTextEntry 
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity 
            style={styles.saveBtn}
            onPress={handleChangePassword}
          >
            <Text style={styles.saveBtnText}>Update Password</Text>
          </TouchableOpacity>
        </View>

        {/* Active Sessions */}
        <View style={styles.card}>
          <Text style={styles.cardHeader}>ACTIVE SESSIONS</Text>
          
          <View style={styles.sessionItem}>
            <Ionicons name="logo-apple" size={24} color="#000" style={styles.sessionIcon} />
            <View style={styles.sessionDetails}>
              <Text style={styles.sessionDevice}>iPhone 15 Pro (Current)</Text>
              <Text style={styles.sessionInfo}>New York, USA • Active now</Text>
            </View>
          </View>

          <View style={styles.sessionDivider} />

          <View style={styles.sessionItem}>
            <Ionicons name="laptop-outline" size={24} color="#666" style={styles.sessionIcon} />
            <View style={styles.sessionDetails}>
              <Text style={styles.sessionDevice}>MacBook Pro 16"</Text>
              <Text style={styles.sessionInfo}>New York, USA • May 20, 2026</Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert("Logged Out", "Logged out from MacBook Pro.")}>
              <Text style={styles.logoutBtnText}>Logout</Text>
            </TouchableOpacity>
          </View>
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
    padding: 20,
    marginBottom: 20,
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
    paddingVertical: 5,
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
  saveBtn: {
    backgroundColor: '#000',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  saveBtnText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
  sessionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  sessionIcon: {
    marginRight: 15,
  },
  sessionDetails: {
    flex: 1,
  },
  sessionDevice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  sessionInfo: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  sessionDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: 5,
  },
  logoutBtnText: {
    color: '#FF3B30',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
