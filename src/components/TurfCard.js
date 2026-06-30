import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import COLORS from '../theme/colors';

export default function TurfCard({
  turf,
  navigation,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() =>
        navigation.navigate('TurfDetails', {
          turf,
        })
      }
    >
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>
          Turf Image
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>
          {turf.name}
        </Text>

        <Text style={styles.location}>
          📍 {turf.location}
        </Text>

        <View style={styles.row}>
          <Text style={styles.price}>
            ₹{turf.price}/hr
          </Text>

          <Text style={styles.rating}>
            ⭐ {turf.rating}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 15,
    elevation: 4,
  },

  imagePlaceholder: {
    height: 120,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageText: {
    color: COLORS.textSecondary,
  },

  content: {
    padding: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },

  location: {
    color: COLORS.textSecondary,
    marginTop: 5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  price: {
    color: COLORS.primary,
    fontWeight: '800',
  },

  rating: {
    color: COLORS.accent,
    fontWeight: '700',
  },
});