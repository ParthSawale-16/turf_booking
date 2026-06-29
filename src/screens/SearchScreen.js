import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import COLORS from '../theme/colors';

const turfs = [
  {
    id: '1',
    name: 'Green Arena',
    location: 'Nashik',
    price: 800,
  },
  {
    id: '2',
    name: 'Champion Turf',
    location: 'Mumbai',
    price: 1000,
  },
  {
    id: '3',
    name: 'Elite Sports Hub',
    location: 'Pune',
    price: 1200,
  },
];

export default function SearchScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredTurfs = turfs.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons
            name="arrow-back"
            size={26}
            color={COLORS.text}
          />
        </TouchableOpacity>

        <TextInput
          placeholder="Search Turf..."
          value={search}
          onChangeText={setSearch}
          autoFocus
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.title}>
        Popular Near You
      </Text>

      <View style={styles.filters}>
        <View style={styles.activeFilter}>
          <Text style={styles.activeText}>
            ⚽ Football
          </Text>
        </View>

        <View style={styles.filter}>
          <Text>🏏 Cricket</Text>
        </View>

        <View style={styles.filter}>
          <Text>🏸 Badminton</Text>
        </View>
      </View>

      <FlatList
        data={filteredTurfs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate(
                'TurfDetails',
                { turf: item }
              )
            }
          >
            <View style={styles.image}>
              <Text>Turf Image</Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.location}>
                📍 {item.location}
              </Text>

              <Text style={styles.price}>
                ₹{item.price}/hr
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 60,
  },

  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  searchInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginLeft: 15,
    height: 55,
    borderRadius: 15,
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.text,
    margin: 20,
  },

  filters: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  activeFilter: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
  },

  activeText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  filter: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
  },

  image: {
    height: 140,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  info: {
    padding: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.text,
  },

  location: {
    marginTop: 5,
    color: COLORS.textSecondary,
  },

  price: {
    marginTop: 8,
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '800',
  },
});
