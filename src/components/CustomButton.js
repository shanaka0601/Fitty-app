import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress, type = 'primary', style }) {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        type === 'primary' ? styles.primary : styles.secondary,
        style
      ]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[
        styles.text, 
        type === 'primary' ? styles.primaryText : styles.secondaryText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  primary: {
    backgroundColor: '#FFFFFF',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  primaryText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
  },
  secondaryText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  }
});
