import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

import TurfCard from '../components/TurfCard';

const turfs = [
  { id: '1', name: 'Champion Turf', location: 'Nashik', price: 800 },
  { id: '2', name: 'Green Field', location: 'Mumbai', price: 1200 },
  { id: '3', name: 'Football Arena', location: 'Pune', price: 1000 }
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#0f172a" barStyle="light-content" />

      {/* BACK BUTTON (same as SignupScreen) */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>⬅</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome 👋</Text>
          <Text style={styles.heading}>Find Your Turf</Text>
        </View>

        <Text style={styles.icon}>⚽</Text>
      </View>

      {/* POPPED SEARCH BUTTON */}
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.searchText}>Search Turf by Location</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Popular Turfs</Text>

      <FlatList
        data={turfs}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TurfCard turf={item} navigation={navigation} />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingHorizontal: 18,
    paddingTop: 50
  },

  /* BACK BUTTON (same as SignupScreen) */
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6
  },

  backText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25
  },

  welcome: {
    marginTop:70,
    fontSize: 16,
    color: '#64748b'
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 5
  },

  icon: {
    fontSize: 42
  },

  /* POPPED SEARCH BUTTON */
  searchButton: {
    backgroundColor: '#1e293b',
    padding: 18,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 10,
    color: '#fff'
  },

  searchText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 15
  }
});