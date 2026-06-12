import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import COLORS from '../theme/colors';

export default function CustomInput({
  value,
  onChangeText,
  placeholder,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#777"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: COLORS.card,
  },

  input: {
    color: COLORS.text,
    fontSize: 16,
  },
});