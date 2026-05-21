import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Alert } from 'react-native';
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
    // Simple validation check
    if (!email.includes('@')) {
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

              <TouchableOpacity 
                style={styles.socialBtn} 
                onPress={() => navigation.navigate('SocialLogin', { platform: 'Facebook' })}
              >
                <FontAwesome name="facebook" size={20} color="#1877F2" style={styles.socialIcon} />
                <Text style={styles.socialBtnText}>Log in with Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.socialBtn}
                onPress={() => navigation.navigate('SocialLogin', { platform: 'Google' })}
              >
                <View style={styles.googleIconPlaceholder}>
                  <Text style={{color: '#4285F4', fontWeight: 'bold', fontSize: 18}}>G</Text>
                </View>
                <Text style={styles.socialBtnText}>Log in with Google</Text>
              </TouchableOpacity>

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
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: '#FFF',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginBtnText: {
    fontSize: 18,
    fontWeight: '500',
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
  socialBtn: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  socialIcon: {
    marginRight: 10,
  },
  googleIconPlaceholder: {
    marginRight: 10,
  },
  socialBtnText: {
    fontSize: 16,
    fontWeight: '500',
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
