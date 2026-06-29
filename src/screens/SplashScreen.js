import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../theme/colors';

export default function SplashScreen({ navigation }) {
  const ballScale = useRef(new Animated.Value(0.6)).current;
  const ballRotate = useRef(new Animated.Value(0)).current;
  const ballTranslateY = useRef(new Animated.Value(-80)).current;

  const titleOpacity = useRef(new Animated.Value(0)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      // Show title and subtitle
      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),

        Animated.timing(subtitleOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),

      // Pause before kick
      Animated.delay(1200),

      // Ball kick animation
      Animated.parallel([
        Animated.timing(ballScale, {
          toValue: 6,
          duration: 2200,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),

        Animated.timing(ballTranslateY, {
          toValue: 40,
          duration: 2200,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),

        Animated.timing(ballRotate, {
          toValue: 1,
          duration: 2200,
          useNativeDriver: true,
        }),

        Animated.timing(titleOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),

        Animated.timing(subtitleOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      navigation.replace('Login');
    });
  }, []);

  return (
    <LinearGradient
      colors={['#F8FAFC', '#EEFDF3']}
      style={styles.container}
    >
      {/* BALL */}
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [
              { translateY: ballTranslateY },
              {
                rotate: ballRotate.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '720deg'],
                }),
              },
              { scale: ballScale },
            ],
          },
        ]}
      >
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Text style={styles.ball}>⚽</Text>
          </View>
        </View>
      </Animated.View>

      {/* TITLE */}
      <Animated.Text
        style={[
          styles.title,
          {
            opacity: titleOpacity,
          },
        ]}
      >
        TurfBook
      </Animated.Text>

      {/* SUBTITLE */}
      <Animated.Text
        style={[
          styles.subtitle,
          {
            opacity: subtitleOpacity,
          },
        ]}
      >
        FIND • BOOK • PLAY
      </Animated.Text>

      {/* LOADING */}
      <Animated.View
        style={{
          opacity: subtitleOpacity,
        }}
      >
        <View style={styles.loadingRow}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </Animated.View>

      <Animated.Text
        style={[
          styles.version,
          {
            opacity: subtitleOpacity,
          },
        ]}
      >
        Premium Sports Booking Platform
      </Animated.Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  logoContainer: {
    position: 'absolute',
    top: '32%',
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
    marginTop: 280,
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
