import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Header from '../components/Header';

const SocialLoginScreen = ({ route, navigation }) => {
  const { platform } = route.params || { platform: 'Google' };

  return (
    <View style={styles.container}>
      <Header title={platform + " Login"} showBack={true} showCart={false} />
      
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          {platform === 'Facebook' ? (
            <FontAwesome name="facebook-official" size={100} color="#1877F2" />
          ) : (
            <FontAwesome name="google" size={100} color="#4285F4" />
          )}
        </View>
        
        <Text style={styles.title}>Continue with {platform}</Text>
        <Text style={styles.description}>
          Allow Fitty to use your {platform} account to log in? This will share your public profile and email address.
        </Text>

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => navigation.navigate('Splash')}
        >
          <Text style={styles.loginButtonText}>Continue as User</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF0',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  iconContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: '#000',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    paddingVertical: 15,
  },
  cancelButtonText: {
    color: '#888',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SocialLoginScreen;
