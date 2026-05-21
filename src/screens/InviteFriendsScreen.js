import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

export default function InviteFriendsScreen() {
  const [copied, setCopied] = useState(false);
  const referralCode = "FITTY50X";

  const handleCopy = () => {
    setCopied(true);
    Alert.alert("Copied!", "Referral code copied to clipboard.");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={styles.container}>
      <Header title="Fitty" showBack={true} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Invite Friends</Text>
          <Text style={styles.subtitle}>Share Fitty with friends and get rewards!</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="gift-outline" size={70} color="#FFD54F" style={styles.giftIcon} />
          
          <Text style={styles.cardTitle}>Give $15, Get $15</Text>
          <Text style={styles.cardDescription}>
            Invite your friends to Fitty. When they make their first purchase using your code, they get $15 off and you get $15 in store credit!
          </Text>

          <View style={styles.codeContainer}>
            <View style={styles.codeBox}>
              <Text style={styles.codeLabel}>YOUR REFERRAL CODE</Text>
              <Text style={styles.codeText}>{referralCode}</Text>
            </View>
            <TouchableOpacity 
              style={[styles.copyBtn, copied && styles.copiedBtn]}
              onPress={handleCopy}
            >
              <Ionicons 
                name={copied ? "checkmark-outline" : "copy-outline"} 
                size={20} 
                color={copied ? "#FFF" : "#000"} 
              />
              <Text style={[styles.copyBtnText, copied && styles.copiedBtnText]}>
                {copied ? "Copied" : "Copy"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.stepsSection}>
          <Text style={styles.sectionTitle}>HOW IT WORKS</Text>
          
          <View style={styles.step}>
            <View style={styles.stepNumber}><Text style={styles.stepNumberText}>1</Text></View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Share Code</Text>
              <Text style={styles.stepDescription}>Copy your code and send it to your friends.</Text>
            </View>
          </View>

          <View style={styles.step}>
            <View style={styles.stepNumber}><Text style={styles.stepNumberText}>2</Text></View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>They Shop & Save</Text>
              <Text style={styles.stepDescription}>Your friends get $15 discount on their first checkout order.</Text>
            </View>
          </View>

          <View style={styles.step}>
            <View style={styles.stepNumber}><Text style={styles.stepNumberText}>3</Text></View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>You Earn Credit</Text>
              <Text style={styles.stepDescription}>We add $15 credit directly to your Fitty wallet account.</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.shareBtn}
          onPress={() => Alert.alert("Share", "Invitation link shared successfully!")}
        >
          <Text style={styles.shareBtnText}>Share Invitation Link</Text>
        </TouchableOpacity>
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
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    marginBottom: 30,
  },
  giftIcon: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 25,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDFBF0',
    borderWidth: 1.5,
    borderColor: '#EAEAEA',
    borderRadius: 15,
    width: '100%',
    padding: 8,
  },
  codeBox: {
    flex: 1,
    paddingLeft: 10,
  },
  codeLabel: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#888',
    letterSpacing: 0.5,
  },
  codeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 2,
    letterSpacing: 1.5,
  },
  copyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF2CC',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000',
  },
  copiedBtn: {
    backgroundColor: '#000',
  },
  copyBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 5,
  },
  copiedBtnText: {
    color: '#FFF',
  },
  stepsSection: {
    marginBottom: 35,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 20,
    letterSpacing: 1.5,
  },
  step: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF2CC',
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 2,
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 3,
  },
  stepDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  shareBtn: {
    backgroundColor: '#000',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  shareBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
