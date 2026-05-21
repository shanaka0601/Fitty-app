import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

const ComingSoonScreen = ({ route, navigation }) => {
  const { title } = route.params || { title: 'Feature' };

  return (
    <View style={styles.container}>
      <Header title={title} showBack={true} showCart={false} />
      <View style={styles.content}>
        <Ionicons name="construct-outline" size={100} color="#FFDD67" />
        <Text style={styles.title}>{title} Coming Soon!</Text>
        <Text style={styles.description}>
          We are working hard to bring this feature to you. Stay tuned for updates!
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
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
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 40,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ComingSoonScreen;
