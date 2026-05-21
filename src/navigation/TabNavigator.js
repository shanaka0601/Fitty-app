import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import AlertsScreen from '../screens/AlertsScreen';
import AddCardScreen from '../screens/AddCardScreen';
import PaymentDetailScreen from '../screens/PaymentDetailScreen';
import SaleScreen from '../screens/SaleScreen';
import ComingSoonScreen from '../screens/ComingSoonScreen';
import CategoryProductsScreen from '../screens/CategoryProductsScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import ShippingAddressScreen from '../screens/ShippingAddressScreen';
import InviteFriendsScreen from '../screens/InviteFriendsScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import SecurityScreen from '../screens/SecurityScreen';
import LanguageScreen from '../screens/LanguageScreen';
import CurrencyScreen from '../screens/CurrencyScreen';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryProducts" component={CategoryProductsScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Sale" component={SaleScreen} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <Stack.Screen name="AddCard" component={AddCardScreen} />
      <Stack.Screen name="PaymentDetail" component={PaymentDetailScreen} />
    </Stack.Navigator>
  );
}

const DummyScreen = () => <View style={{ flex: 1, backgroundColor: '#FFF2CC' }} />;

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <Stack.Screen name="AddCard" component={AddCardScreen} />
      <Stack.Screen name="PaymentDetail" component={PaymentDetailScreen} />
      <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
      <Stack.Screen name="ShippingAddress" component={ShippingAddressScreen} />
      <Stack.Screen name="InviteFriends" component={InviteFriendsScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen name="Security" component={SecurityScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Currency" component={CurrencyScreen} />
      <Stack.Screen name="ComingSoon" component={ComingSoonScreen} />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: '#FDFBF0',
          borderTopWidth: 0,
          elevation: 10,
          height: 80,
          paddingBottom: 15,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarIcon: ({ focused, color, size }) => {
          size = 24;
          color = focused ? '#000' : '#888';
          
          if (route.name === 'Home') {
            return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
          } else if (route.name === 'Favorites') {
            return <Ionicons name={focused ? 'heart' : 'heart-outline'} size={size} color={color} />;
          } else if (route.name === 'Alerts') {
            return <Ionicons name={focused ? 'notifications' : 'notifications-outline'} size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Alerts" component={AlertsScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
