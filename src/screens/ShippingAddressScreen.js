import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import CustomInput from '../components/CustomInput';

export default function ShippingAddressScreen() {
  const [selectedId, setSelectedId] = useState('1');
  const [addresses, setAddresses] = useState([
    {
      id: '1',
      tag: 'Home',
      name: 'Sachini Perera',
      street: 'Colombo,Horana Road ',
      city: 'Piliyandala',
      phone: '+94 72 555-0199',
      isDefault: true
    },
    {
      id: '2',
      tag: 'Office',
      name: 'Sachini Perera',
      street: 'Baththaramulla Fifth Avenue, Floor 6',
      city: 'Colombo',
      phone: '+94 75 565-0199',
      isDefault: false
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [newName, setNewName] = useState('');
  const [newStreet, setNewStreet] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleAddAddress = () => {
    if (!newTag || !newName || !newStreet || !newCity || !newPhone) {
      Alert.alert('Error', 'Please fill in all details.');
      return;
    }
    const newAddress = {
      id: (addresses.length + 1).toString(),
      tag: newTag,
      name: newName,
      street: newStreet,
      city: newCity,
      phone: newPhone,
      isDefault: false
    };
    setAddresses([...addresses, newAddress]);
    setShowAddForm(false);
    setNewTag('');
    setNewName('');
    setNewStreet('');
    setNewCity('');
    setNewPhone('');
    Alert.alert('Success', 'Address added successfully!');
  };

  return (
    <View style={styles.container}>
      <Header title="Fitty" showBack={true} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Shipping Address</Text>
          <Text style={styles.subtitle}>Select or manage your delivery locations.</Text>
        </View>

        {!showAddForm ? (
          <>
            {addresses.map((address) => (
              <TouchableOpacity
                key={address.id}
                style={[
                  styles.addressCard,
                  selectedId === address.id && styles.selectedCard
                ]}
                onPress={() => setSelectedId(address.id)}
              >
                <View style={styles.cardHeader}>
                  <View style={styles.tagBox}>
                    <Ionicons
                      name={address.tag.toLowerCase() === 'home' ? 'home-outline' : 'briefcase-outline'}
                      size={16}
                      color="#000"
                    />
                    <Text style={styles.tagText}>{address.tag}</Text>
                  </View>
                  <Ionicons
                    name={selectedId === address.id ? 'checkmark-circle' : 'ellipse-outline'}
                    size={24}
                    color={selectedId === address.id ? '#000' : '#CCC'}
                  />
                </View>

                <Text style={styles.name}>{address.name}</Text>
                <Text style={styles.street}>{address.street}</Text>
                <Text style={styles.city}>{address.city}</Text>
                <Text style={styles.phone}>{address.phone}</Text>

                {address.isDefault && (
                  <View style={styles.defaultBadge}>
                    <Text style={styles.defaultText}>DEFAULT ADDRESS</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => setShowAddForm(true)}
            >
              <Ionicons name="add-circle-outline" size={24} color="#000" />
              <Text style={styles.addBtnText}>Add New Address</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>New Address Details</Text>

            <CustomInput
              label="Address Label (e.g. Home, Office)"
              placeholder="Home"
              value={newTag}
              onChangeText={setNewTag}
            />
            <CustomInput
              label="Full Name"
              placeholder="John Doe"
              value={newName}
              onChangeText={setNewName}
            />
            <CustomInput
              label="Street & Apt #"
              placeholder="123 Maple St"
              value={newStreet}
              onChangeText={setNewStreet}
            />
            <CustomInput
              label="City, State & Zip Code"
              placeholder="Colombo, NY 10001"
              value={newCity}
              onChangeText={setNewCity}
            />
            <CustomInput
              label="Phone Number"
              placeholder="+94 72 555-0189"
              value={newPhone}
              onChangeText={setNewPhone}
            />

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.btn, styles.cancelBtn]}
                onPress={() => setShowAddForm(false)}
              >
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.btn, styles.saveBtn]}
                onPress={handleAddAddress}
              >
                <Text style={styles.saveBtnText}>Save Address</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
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
  addressCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#FFF',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  selectedCard: {
    borderColor: '#FFF2CC',
    backgroundColor: '#FFFDF6',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  tagBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF2CC',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  street: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  city: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  phone: {
    fontSize: 13,
    color: '#888',
    fontWeight: '500',
  },
  defaultBadge: {
    marginTop: 15,
    backgroundColor: '#000',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  defaultText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: 'bold',
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#DDD',
    borderStyle: 'dashed',
    borderRadius: 15,
    padding: 18,
    marginTop: 10,
    backgroundColor: '#FFF',
  },
  addBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  formContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  btn: {
    width: '48%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtn: {
    borderWidth: 1.5,
    borderColor: '#000',
    backgroundColor: '#FFF',
  },
  cancelBtnText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  saveBtn: {
    backgroundColor: '#000',
  },
  saveBtnText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
