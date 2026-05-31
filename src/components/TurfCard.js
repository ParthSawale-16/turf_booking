import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function TurfCard({ turf, navigation }) {

  return (
    <View style={styles.card}>

      <Text style={styles.name}>{turf.name}</Text>

      <Text>{turf.location}</Text>

      <Text>₹{turf.price}/hour</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Booking', { turf })
        }
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});