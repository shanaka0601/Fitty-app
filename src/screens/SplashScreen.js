import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.logo}>Fitty</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 2,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },
});
