import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';

export default function CreateAccountScreen({ navigation }) {
  const [agreed, setAgreed] = useState(false);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!fullName.trim() || !address.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all the details to create an account.');
      return;
    }
    if (!agreed) {
      Alert.alert('Error', 'Please agree to the processing of personal data.');
      return;
    }
    navigation.navigate('Splash');
  };

  return (
    <ImageBackground 
      source={require('../assets/images/welcome.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text style={styles.backText}>BACK</Text>
        </TouchableOpacity>
        <View style={{ width: 60 }} />
      </View>

      <View style={styles.bottomContainer}>
        <BlurView intensity={50} tint="light" style={styles.blurContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            
            <Text style={styles.title}>Create Account</Text>
            
            <View style={styles.form}>
              <CustomInput 
                label="Full Name" 
                placeholder="Enter full name" 
                value={fullName}
                onChangeText={setFullName}
              />
              <CustomInput 
                label="Address" 
                placeholder="Enter current address" 
                value={address}
                onChangeText={setAddress}
              />
              <CustomInput 
                label="Email Address" 
                placeholder="Enter email address" 
                value={email}
                onChangeText={setEmail}
              />
              <CustomInput 
                label="Password" 
                placeholder="Enter strong password" 
                secureTextEntry 
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity 
                style={styles.checkboxContainer} 
                onPress={() => setAgreed(!agreed)}
                activeOpacity={0.8}
              >
                <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
                  {agreed && <Ionicons name="checkmark" size={14} color="white" />}
                </View>
                <Text style={styles.checkboxText}>I agree to the processing of Personal data</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.getStartedBtn} onPress={handleRegister}>
                <Text style={styles.getStartedBtnText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </BlurView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  blurContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
    height: '80%',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  form: {
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#000',
  },
  checkboxText: {
    fontSize: 12,
    fontWeight: '500',
  },
  getStartedBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: '#FFF',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});
