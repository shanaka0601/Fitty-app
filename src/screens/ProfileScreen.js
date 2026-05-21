import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const MenuItem = ({ icon, title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        <Ionicons name={icon} size={24} color="#000" />
        <Text style={styles.menuText}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#CCC" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Fitty" onMenuPress={() => navigation.navigate('Settings')} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>My Profile</Text>
          <View style={styles.underline} />
        </View>

        <View style={styles.profileHeader}>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' }} 
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="pencil" size={16} color="#FFF" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Sasha Meyer</Text>
          <Text style={styles.email}>sasha.meyer@editorial.com</Text>
        </View>

        <View style={styles.menuSection}>
          <MenuItem icon="cube-outline" title="My Orders" onPress={() => navigation.navigate('MyOrders')} />
          <MenuItem icon="heart-outline" title="Wishlist" onPress={() => navigation.navigate('Favorites')} />
          <MenuItem icon="location-outline" title="Shipping Address" onPress={() => navigation.navigate('ShippingAddress')} />
          <MenuItem icon="card-outline" title="Payment Methods" onPress={() => navigation.navigate('PaymentMethod')} />
          <MenuItem icon="person-add-outline" title="Invite Friends" onPress={() => navigation.navigate('InviteFriends')} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  titleSection: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#000',
  },
  underline: {
    width: 60,
    height: 1,
    backgroundColor: '#CCC',
    marginTop: 5,
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 30,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: '#FFF2CC',
  },
  editButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#000',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#000',
  },
  email: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  menuSection: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 15,
    color: '#333',
  },
});

export default ProfileScreen;
