import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

import COLORS from '../theme/colors';
import PrimaryButton from '../components/PrimaryButton';
import CustomInput from '../components/CustomInput';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');

  return (
    <LinearGradient
      colors={['#F8FAFC', '#EEFDF3']}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <View style={styles.hero}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>⚽</Text>
          </View>

          <Text style={styles.brand}>
            TurfBook
          </Text>

          <Text style={styles.heroText}>
            FIND • BOOK • PLAY
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              🔥 NEW SEASON
            </Text>
          </View>

          <Text style={styles.heading}>
            Join The Game
          </Text>

          <Text style={styles.subHeading}>
            Book premium sports turfs instantly.
          </Text>

          <View style={styles.offerCard}>
            <Text style={styles.offerTitle}>
              🎉 Welcome Offer
            </Text>

            <Text style={styles.offerSubtitle}>
              Get 20% OFF on your first turf booking.
            </Text>
          </View>

          <CustomInput
            placeholder="+91 Enter Phone Number"
            value={phone}
            onChangeText={setPhone}
          />

          <View style={{ height: 20 }} />

          <PrimaryButton
            title="Continue"
            onPress={() => {}}
          />

          <View style={styles.dividerContainer}>
            <View style={styles.line} />

            <Text style={styles.dividerText}>
              OR
            </Text>

            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.googleButton}>
            <AntDesign
              name="google"
              size={22}
              color="#EA4335"
            />

            <Text style={styles.googleText}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            By continuing, you agree to our
            <Text style={styles.link}>
              {' '}Terms & Privacy Policy
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  hero: {
    alignItems: 'center',
    marginTop: 80,
  },

  logoCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#FFF7ED',
    borderWidth: 3,
    borderColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    fontSize: 55,
  },

  brand: {
    color: COLORS.text,
    fontSize: 38,
    fontWeight: '900',
    marginTop: 15,
  },

  heroText: {
    color: COLORS.accent,
    marginTop: 8,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 3,
  },

  card: {
    flex: 1,
    marginTop: 40,
    backgroundColor: COLORS.card,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 24,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(245,158,11,0.15)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  badgeText: {
    color: COLORS.accent,
    fontWeight: '700',
  },

  heading: {
    color: COLORS.text,
    fontSize: 32,
    fontWeight: '900',
    marginTop: 20,
  },

  subHeading: {
    color: COLORS.textSecondary,
    fontSize: 16,
    marginTop: 8,
    marginBottom: 24,
  },

  offerCard: {
    backgroundColor: '#FFF7ED',
    borderWidth: 1,
    borderColor: '#FCD34D',
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
  },

  offerTitle: {
    color: COLORS.accent,
    fontWeight: '800',
    fontSize: 16,
  },

  offerSubtitle: {
    color: COLORS.text,
    marginTop: 6,
    fontSize: 14,
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },

  dividerText: {
    marginHorizontal: 15,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },

  googleButton: {
    height: 60,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  googleText: {
    color: COLORS.text,
    marginLeft: 10,
    fontWeight: '700',
    fontSize: 16,
  },

  footer: {
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 30,
    lineHeight: 22,
  },

  link: {
    color: COLORS.accent,
    fontWeight: '700',
  },
});
