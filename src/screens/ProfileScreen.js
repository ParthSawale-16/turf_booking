import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import COLORS from '../theme/colors';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={COLORS.text}
          />
        </TouchableOpacity>

        <Text style={styles.pageTitle}>
          Profile
        </Text>

        <View style={{ width: 40 }} />
      </View>

      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>PS</Text>
        </View>

        <Text style={styles.name}>
          Parth Sawale
        </Text>

        <Text style={styles.email}>
          parth@example.com
        </Text>
      </View>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>My Bookings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Favourite Turfs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Help & Support</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 55,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.text,
  },

  header: {
    alignItems: 'center',
    marginBottom: 30,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
  },

  name: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.text,
  },

  email: {
    marginTop: 5,
    color: COLORS.textSecondary,
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 18,
    borderRadius: 18,
  },

  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
});