import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import BookingScreen from '../screens/BookingScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: true,   // ✅ BACK BUTTON ENABLED
        }}
      >

        {/* LOGIN */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* SIGNUP */}
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />

        {/* HOME */}
        <Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{
    headerShown: false
  }}
/>

        {/* SEARCH */}
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Search' }}
        />

        {/* BOOKING */}
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{ title: 'Booking' }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}