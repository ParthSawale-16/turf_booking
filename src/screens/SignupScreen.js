import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import COLORS from '../theme/colors';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <LinearGradient
      colors={['#F8FAFC', '#EEFDF3']}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.header}>
            <Text style={styles.logo}>⚽</Text>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>
              Join TurfBook today
            </Text>
          </View>

          <View style={styles.card}>
            <CustomInput
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
            />

            <View style={{ height: 15 }} />

            <CustomInput
              placeholder="+91 Phone Number"
              value={phone}
              onChangeText={setPhone}
            />

            <View style={{ height: 15 }} />

            <CustomInput
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
            />

            <View style={{ height: 25 }} />

            <PrimaryButton
              title="Create Account"
              onPress={() => navigation.replace('Home')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    marginTop: 90,
    alignItems: 'center',
  },

  logo: {
    fontSize: 60,
  },

  title: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.text,
    marginTop: 10,
  },

  subtitle: {
    marginTop: 8,
    color: COLORS.textSecondary,
  },

  card: {
    marginTop: 40,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 25,
    flex: 1,
  },
});