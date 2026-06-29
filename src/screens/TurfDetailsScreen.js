import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import COLORS from '../theme/colors';

export default function TurfDetailsScreen({ route, navigation }) {
  const turf = route.params?.turf || {
    name: 'Green Arena',
    location: 'Nashik',
    price: 800,
    rating: 4.8,
  };

  const facilities = [
    '💡 Floodlights',
    '🚿 Changing Room',
    '🚰 Drinking Water',
    '🚗 Parking',
    '📶 WiFi',
    '🛡 Security',
  ];

  const slots = [
    '6:00 AM',
    '7:00 AM',
    '8:00 AM',
    '9:00 AM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={COLORS.text}
            />
          </TouchableOpacity>

          <Text style={styles.imageText}>
            Turf Image
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.turfName}>
            {turf.name}
          </Text>

          <Text style={styles.location}>
            📍 {turf.location}
          </Text>

          <Text style={styles.rating}>
            ⭐ {turf.rating} (234 Reviews)
          </Text>

          <View style={styles.priceCard}>
            <View>
              <Text style={styles.priceLabel}>
                Price / Hour
              </Text>

              <Text style={styles.price}>
                ₹{turf.price}
              </Text>
            </View>

            <View>
              <Text style={styles.priceLabel}>
                Available Slots
              </Text>

              <Text style={styles.slotCount}>
                12
              </Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>
            Facilities
          </Text>

          <View style={styles.facilitiesContainer}>
            {facilities.map((item, index) => (
              <View
                key={index}
                style={styles.facility}
              >
                <Text>{item}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>
            Available Slots
          </Text>

          <View style={styles.slotContainer}>
            {slots.map((slot, index) => (
              <TouchableOpacity
                key={index}
                style={styles.slot}
              >
                <Text style={styles.slotText}>
                  {slot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>
          BOOK NOW
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  imageContainer: {
    height: 280,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageText: {
    fontSize: 20,
    color: COLORS.textSecondary,
  },

  backButton: {
    position: 'absolute',
    top: 55,
    left: 20,

    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 5,
    zIndex: 10,
  },

  content: {
    padding: 20,
    paddingBottom: 120,
  },

  turfName: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.text,
  },

  location: {
    marginTop: 8,
    color: COLORS.textSecondary,
    fontSize: 16,
  },

  rating: {
    marginTop: 8,
    color: COLORS.accent,
    fontWeight: '700',
  },

  priceCard: {
    marginTop: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
  },

  priceLabel: {
    color: COLORS.textSecondary,
  },

  price: {
    marginTop: 5,
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.primary,
  },

  slotCount: {
    marginTop: 5,
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.accent,
  },

  sectionTitle: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.text,
  },

  facilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  facility: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
  },

  slotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  slot: {
    width: '48%',
    backgroundColor: '#DCFCE7',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 12,
  },

  slotText: {
    color: COLORS.primary,
    fontWeight: '700',
  },

  bookButton: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    height: 60,
    borderRadius: 18,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
});
