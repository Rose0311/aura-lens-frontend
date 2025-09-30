import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const GenerateButton = ({ onPress, disabled }) => (
  <TouchableOpacity
    style={[styles.button, disabled && styles.disabledButton]}
    onPress={onPress}
    disabled={disabled}
    // --- ACCESSIBILITY ADDITIONS ---
    accessibilityLabel="Generate Caption"
    accessibilityState={{ disabled: disabled }}
    // -----------------------------
  >
    <Text style={styles.text}>Generate Caption</Text>
  </TouchableOpacity>
);

// Styles remain the same
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#1E90FF',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 25,
      marginTop: 20,
    },
    disabledButton: {
      backgroundColor: '#555',
    },
    text: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default GenerateButton;