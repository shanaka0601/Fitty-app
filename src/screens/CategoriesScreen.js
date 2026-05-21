import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import Header from '../components/Header';

const categories = [
  { id: '1', title: 'Women', items: '130+ items', image: require('../assets/images/women category.png') },
  { id: '2', title: 'Men', items: '100+ items', image: require('../assets/images/men category.png') },
  { id: '3', title: 'Dresses', items: '70+ items', image: require('../assets/images/Red frock.png') },
  { id: '4', title: 'Shoes', items: '100+ items', image: require('../assets/images/shoes category.png') },
  { id: '5', title: 'Accessories', items: '30+ items', image: require('../assets/images/accessories category.png') },
  { id: '6', title: 'Sarees', items: '70+ items', image: require('../assets/images/saree category.png') },
];

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header 
        title="CATEGORIES"
        onMenuPress={() => navigation.goBack()} 
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {categories.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.card}
              onPress={() => navigation.navigate('CategoryProducts', { categoryTitle: item.title })}
            >
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.favoriteBtn}>
                  <Ionicons name="heart" size={20} color="white" />
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.itemsText}>{item.items}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  favoriteBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    padding: 5,
  },
  info: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  itemsText: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});
