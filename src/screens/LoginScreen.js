import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#0f172a" barStyle="light-content" />

      <View style={styles.topSection}>
        <Text style={styles.logo}>⚽</Text>

        <Text style={styles.heading}>
          Turf Booking
        </Text>

        <Text style={styles.subHeading}>
          Book your favourite turf instantly
        </Text>
      </View>

      <View style={styles.card}>

        <Text style={styles.loginText}>
          Login
        </Text>

        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="#888"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Enter Password"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.loginButtonText}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.signupText}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    padding: 20
  },

  topSection: {
    alignItems: 'center',
    marginBottom: 40
  },

  logo: {
    fontSize: 70,
    marginBottom: 10
  },

  heading: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold'
  },

  subHeading: {
    color: '#cbd5e1',
    marginTop: 5,
    fontSize: 16
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 25
  },

  loginText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#0f172a',
    textAlign: 'center'
  },

  input: {
    backgroundColor: '#f1f5f9',
    padding: 15,
    borderRadius: 12,
    marginBottom: 18,
    fontSize: 16
  },

  forgotButton: {
    alignItems: 'flex-end',
    marginBottom: 20
  },

  forgotText: {
    color: '#2563eb',
    fontWeight: '600'
  },

  loginButton: {
    backgroundColor: '#22c55e',
    padding: 16,
    borderRadius: 12
  },

  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },

  signupText: {
    marginTop: 25,
    textAlign: 'center',
    color: '#475569',
    fontWeight: '600'
  }

});