import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export default function BookingScreen({ route }) {

  const { turf } = route.params;

  const handleBooking = () => {
    Alert.alert(
      'Success',
      'Your turf has been booked!'
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {turf.name}
      </Text>

      <Text style={styles.text}>
        Location: {turf.location}
      </Text>

      <Text style={styles.text}>
        Price: ₹{turf.price}/hour
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleBooking}
      >
        <Text style={styles.buttonText}>
          Confirm Booking
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});