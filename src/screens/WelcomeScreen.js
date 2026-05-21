import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Fallback to remote URL for now so it works without the local file */}
      <ImageBackground 
        source={require('../assets/images/welcome.png')} 
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Fitty</Text>
          
          <View style={styles.buttonContainer}>
            <CustomButton 
              title="Log in" 
              type="primary" 
              onPress={() => navigation.navigate('Login')} 
            />
            <CustomButton 
              title="Create Account" 
              type="secondary" 
              onPress={() => navigation.navigate('CreateAccount')} 
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 80,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  buttonContainer: {
    width: '100%',
  }
});
