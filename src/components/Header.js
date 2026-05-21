import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ 
  title = "Fitty", 
  showBack = false, 
  showCart = true, 
  onMenuPress,
  rightIcon,
  onRightPress
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => showBack ? navigation.goBack() : onMenuPress?.()}
          style={styles.iconContainer}
        >
          <Ionicons 
            name={showBack ? "chevron-back-circle" : "menu-outline"} 
            size={showBack ? 36 : 28} 
            color="#000" 
          />
        </TouchableOpacity>

        <Text style={styles.logoText}>{title}</Text>

        <TouchableOpacity 
          style={styles.iconContainer}
          onPress={() => onRightPress ? onRightPress() : navigation.navigate('Cart')}
        >
          {rightIcon ? (
            <Ionicons name={rightIcon} size={28} color="#000" />
          ) : showCart ? (
            <Ionicons name="bag-outline" size={26} color="#000" />
          ) : (
            <View style={{ width: 28 }} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FDFBF0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
  },
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#FDFBF0',
    borderBottomWidth: 0,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'serif', // Attempting a serif look
  },
});

export default Header;
