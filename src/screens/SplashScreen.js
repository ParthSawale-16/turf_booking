import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../theme/colors';

export default function SplashScreen({ navigation }) {
  const logoScale = useRef(new Animated.Value(0.5)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(logoScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),

      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={['#F8FAFC', '#EEFDF3']}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [{ scale: logoScale }],
          },
        ]}
      >
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Text style={styles.ball}>
              ⚽
            </Text>
          </View>
        </View>
      </Animated.View>

      <Animated.Text
        style={[
          styles.title,
          {
            opacity: textOpacity,
          },
        ]}
      >
        TurfBook
      </Animated.Text>

      <Animated.Text
        style={[
          styles.subtitle,
          {
            opacity: textOpacity,
          },
        ]}
      >
        FIND • BOOK • PLAY
      </Animated.Text>

      <View style={styles.loadingRow}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <Text style={styles.version}>
        Premium Sports Booking Platform
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  outerCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(34,197,94,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF7ED',
    borderWidth: 3,
    borderColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ball: {
    fontSize: 55,
  },

  title: {
    marginTop: 30,
    fontSize: 42,
    fontWeight: '900',
    color: COLORS.text,
  },

  subtitle: {
    marginTop: 10,
    color: COLORS.accent,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 3,
  },

  loadingRow: {
    flexDirection: 'row',
    marginTop: 45,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },

  version: {
    position: 'absolute',
    bottom: 60,
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
});