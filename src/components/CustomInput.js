import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function CustomInput({ label, placeholder, secureTextEntry, value, onChangeText }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#666"
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#000',
    height: 65,
    justifyContent: 'center'
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    position: 'absolute',
    top: -10,
    left: 20,
    backgroundColor: 'white', // Needs transparency trick or just black text 
    paddingHorizontal: 4,
    zIndex: 1,
  },
  input: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  }
});
