import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../theme/colors';
import TurfCard from '../components/TurfCard';

const turfs = [
  { id: '1', name: 'Green Arena', location: 'Nashik', price: 800, rating: 4.8 },
  { id: '2', name: 'Champion Turf', location: 'Mumbai', price: 1000, rating: 4.9 },
  { id: '3', name: 'Elite Sports Hub', location: 'Pune', price: 1200, rating: 4.9 },
];

const offers = [
  {
    id: '1',
    title: 'Weekend Offer',
    desc: 'Get 20% OFF on bookings',
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d',
  },
  {
    id: '2',
    title: 'Night Matches',
    desc: 'Flat discount on evening slots',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2',
  },
  {
    id: '3',
    title: 'Group Booking',
    desc: 'Special prices for teams',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b',
  },
];

export default function HomeScreen({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const ballX = useRef(new Animated.Value(0)).current;
  const ballY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(ballX, {
            toValue: 280,
            duration: 9000,
            useNativeDriver: true,
          }),
          Animated.timing(ballX, {
            toValue: 0,
            duration: 9000,
            useNativeDriver: true,
          }),
        ]),

        Animated.sequence([
          Animated.timing(ballY, {
            toValue: 600,
            duration: 7000,
            useNativeDriver: true,
          }),
          Animated.timing(ballY, {
            toValue: 0,
            duration: 7000,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, []);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [140, 90],
    extrapolate: 'clamp',
  });

  const nameOpacity = scrollY.interpolate({
    inputRange: [0, 70],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const nameTranslate = scrollY.interpolate({
    inputRange: [0, 70],
    outputRange: [0, -12],
    extrapolate: 'clamp',
  });

  const profileScale = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1.1, 0.95],
    extrapolate: 'clamp',
  });

  return (
    <LinearGradient
      colors={['#F8FAFC', '#EEFDF3', '#EAFBF0']}
      style={styles.container}
    >
      <Animated.Text
        style={[
          styles.dvdBall,
          {
            transform: [
              { translateX: ballX },
              { translateY: ballY },
            ],
          },
        ]}
      >
        ⚽
      </Animated.Text>

      <Animated.View style={[styles.topNav, { height: headerHeight }]}>
        <View style={styles.locationBox}>
          <Text style={styles.location}>📍 Nashik</Text>
        </View>

        <View style={styles.rightSection}>
          <Animated.View
            style={[
              styles.profile,
              { transform: [{ scale: profileScale }] },
            ]}
          >
            <Text style={styles.profileText}>PS</Text>
          </Animated.View>

          <Animated.Text
            style={[
              styles.name,
              {
                opacity: nameOpacity,
                transform: [{ translateY: nameTranslate }],
              },
            ]}
          >
            Parth Sawale
          </Animated.Text>
        </View>
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <TouchableOpacity
          style={styles.searchBox}
          onPress={() => navigation.navigate('SearchScreen')}
        >
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search turfs, sports..."
            style={styles.searchInput}
            editable={false}
          />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>🔥 Offers</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={offers}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingLeft: 20 }}
          renderItem={({ item }) => (
            <View style={styles.offerCard}>
              <Image source={{ uri: item.image }} style={styles.offerImage} />
              <View style={styles.offerContent}>
                <Text style={styles.offerTitle}>{item.title}</Text>
                <Text style={styles.offerDesc}>{item.desc}</Text>
              </View>
            </View>
          )}
        />

        <Text style={styles.sectionTitle}>Sports</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={['⚽ Football', '🏏 Cricket', '🏸 Badminton', '🏐 Volleyball']}
          keyExtractor={(i, index) => index.toString()}
          contentContainerStyle={{ paddingLeft: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.category}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />

        <Text style={styles.sectionTitle}>Nearby Turfs</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={turfs}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingLeft: 20 }}
          renderItem={({ item }) => (
            <TurfCard turf={item} navigation={navigation} />
          )}
        />

        <Text style={styles.sectionTitle}>Featured Ground</Text>

        <TouchableOpacity style={styles.featuredCard}>
          <Text style={{ fontWeight: '800' }}>
            Champions Field
          </Text>
        </TouchableOpacity>
      </Animated.ScrollView>

      <View style={styles.bottomNav}>
        <Ionicons name="home" size={26} color={COLORS.primary} />
        <Ionicons name="calendar-outline" size={26} color="#94A3B8" />
        <Ionicons name="heart-outline" size={26} color="#94A3B8" />
        <Ionicons name="person-outline" size={26} color="#94A3B8" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  dvdBall: {
    position: 'absolute',
    top: 100,
    left: 20,
    fontSize: 170,
    opacity: 0.10,
    zIndex: 0,
  },

  topNav: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingTop: 55,
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
    elevation: 10,
  },

  locationBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  location: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.text,
  },

  rightSection: {
    alignItems: 'flex-end',
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 18,
  },

  name: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.text,
  },

  searchBox: {
    marginTop: 150,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 20,
    marginTop: 20,
  },

  offerCard: {
    width: 250,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 15,
    overflow: 'hidden',
    elevation: 3,
  },

  offerImage: {
    width: '100%',
    height: 95,
  },

  offerContent: {
    padding: 10,
  },

  offerTitle: {
    fontWeight: '800',
  },

  offerDesc: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },

  category: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  featuredCard: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
  },

  bottomNav: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 12,
  },
});