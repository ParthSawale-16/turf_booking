import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

const turfs = [
  { id: '1', name: 'Aangan Turf', location: 'Deolali Camp', price: 800, players: '7v7', sport: 'Football' },
  { id: '2', name: 'Kridabhumi Turf', location: 'Dwarka', price: 700, players: '7v7', sport: 'Football' },
  { id: '3', name: 'Hattrick Turf', location: 'Shivaji Nagar', price: 600, players: '5v5', sport: 'Cricket' },
  { id: '4', name: 'Shivaji Maharaj Turf', location: 'Dattanagar', price: 500, players: '5v5', sport: 'Football' },
  { id: '5', name: 'Yorker Turf', location: 'Sneha Nagar', price: 800, players: '6v6', sport: 'Cricket' },
  { id: '6', name: 'SK Sports Turf', location: 'Bhagur', price: 500, players: '7v7', sport: 'Football' },
  { id: '7', name: 'Ranangan Turf', location: 'Trimbak Road', price: 700, players: '7v7', sport: 'Football' },
  { id: '8', name: 'Royal Turf', location: 'Morade Nagar', price: 500, players: '5v5', sport: 'Football' },
  { id: '9', name: 'Eagle Sports Ground', location: 'Deolali Gaon', price: 900, players: '7v7', sport: 'Football' },
  { id: '10', name: 'Suyojit Ground', location: 'Chandshi', price: 1200, players: '11v11', sport: 'Cricket' }
];

export default function SearchScreen() {

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ALL');

  const filteredData = turfs.filter(item => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === 'ALL' ||
      item.sport === filter ||
      item.players === filter;

    return matchSearch && matchFilter;
  });

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#0f172a" barStyle="light-content" />

      <Text style={styles.title}>Search Turfs</Text>

      {/* SEARCH BOX */}
      <TextInput
        placeholder="Search by name or location"
        placeholderTextColor="#94a3b8"
        value={search}
        onChangeText={setSearch}
        style={styles.searchBox}
      />

      {/* FILTERS */}
      <View style={styles.filterRow}>

        <TouchableOpacity onPress={() => setFilter('ALL')}>
          <Text style={filter === 'ALL' ? styles.active : styles.filter}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('Football')}>
          <Text style={filter === 'Football' ? styles.active : styles.filter}>Football</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('Cricket')}>
          <Text style={filter === 'Cricket' ? styles.active : styles.filter}>Cricket</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('5v5')}>
          <Text style={filter === '5v5' ? styles.active : styles.filter}>5v5</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('7v7')}>
          <Text style={filter === '7v7' ? styles.active : styles.filter}>7v7</Text>
        </TouchableOpacity>

      </View>

      {/* LIST */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>

            {/* IMAGE BANNER */}
            <View style={styles.imageBox}>
              <Text style={styles.imageTitle}>{item.name}</Text>
              <Text style={styles.imageSub}>{item.location}</Text>
            </View>

            {/* DETAILS */}
            <View style={styles.infoBox}>

              <Text style={styles.price}>💰 ₹{item.price}/hr</Text>

              <Text style={styles.meta}>👥 Players: {item.players}</Text>

              <Text style={styles.meta}>🏆 Sport: {item.sport}</Text>

              <Text style={styles.meta}>
                🧰 Amenities: Floodlights • Parking • Seating • Washroom
              </Text>

            </View>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 18,
    paddingTop: 50
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15
  },

  searchBox: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 12,
    color: '#fff',
    marginBottom: 15
  },

  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15
  },

  filter: {
    color: '#94a3b8',
    marginRight: 12,
    marginBottom: 8,
    padding: 6
  },

  active: {
    color: '#fff',
    backgroundColor: '#1e293b',
    padding: 6,
    borderRadius: 8,
    marginRight: 12,
    marginBottom: 8
  },

  card: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12
  },

  imageBox: {
    height: 130,
    backgroundColor: '#0f172a',
    borderRadius: 12,
    marginBottom: 10,
    justifyContent: 'flex-end',
    padding: 12,
    borderWidth: 1,
    borderColor: '#334155'
  },

  imageTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  imageSub: {
    color: '#94a3b8',
    fontSize: 13,
    marginTop: 2
  },

  infoBox: {
    marginTop: 10
  },

  price: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6
  },

  meta: {
    color: '#cbd5e1',
    fontSize: 15,
    marginBottom: 4,
    lineHeight: 20
  }
});