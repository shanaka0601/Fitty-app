import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all details correctly.");
      return;
    }
    // Robust email validation check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      Alert.alert("Error", "Please enter a valid email address.");
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
        <Text style={styles.title}>Log In</Text>
        <View style={{ width: 60 }} />
      </View>

      <View style={styles.bottomContainer}>
        <BlurView intensity={50} tint="light" style={styles.blurContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

            <View style={styles.form}>
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
              <TouchableOpacity onPress={() => navigation.navigate('ComingSoon', { title: 'Forgot Password' })}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginBtnText}>Log In</Text>
              </TouchableOpacity>

              <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>or</Text>
                <View style={styles.divider} />
              </View>

              <View style={styles.socialRow}>
                <TouchableOpacity
                  style={styles.facebookBtn}
                  onPress={() => navigation.navigate('SocialLogin', { platform: 'Facebook' })}
                  activeOpacity={0.85}
                >
                  <Image 
                    source={{ uri: 'https://img.icons8.com/color/72/facebook-new.png' }} 
                    style={styles.socialImageLogo} 
                  />
                  <Text style={styles.facebookBtnText}>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.googleBtn}
                  onPress={() => navigation.navigate('SocialLogin', { platform: 'Google' })}
                  activeOpacity={0.85}
                >
                  <Image 
                    source={{ uri: 'https://img.icons8.com/color/72/google-logo.png' }} 
                    style={styles.socialImageLogo} 
                  />
                  <Text style={styles.googleBtnText}>Google</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                  <Text style={styles.footerLink}>Create Account</Text>
                </TouchableOpacity>
              </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  blurContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
    height: '75%',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  form: {
    width: '100%',
  },
  forgotPassword: {
    textAlign: 'right',
    marginTop: 5,
    marginBottom: 20,
    fontSize: 12,
    fontWeight: '500',
  },
  loginBtn: {
    backgroundColor: '#000000',
    height: 55,
    borderRadius: 27.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
  },
  dividerText: {
    marginHorizontal: 15,
    fontWeight: 'bold',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: 20,
  },
  facebookBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 3,
  },
  facebookBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginLeft: 10,
    letterSpacing: 0.2,
  },
  googleBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 3,
  },
  googleBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginLeft: 10,
    letterSpacing: 0.2,
  },
  socialImageLogo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  footer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    fontSize: 12,
    marginBottom: 5,
  },
  footerLink: {
    fontSize: 12,
    fontWeight: 'bold',
  }
});
