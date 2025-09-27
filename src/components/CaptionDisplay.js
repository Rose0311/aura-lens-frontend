import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CaptionDisplay = () => (
  <View style={styles.container}>
    <Text style={styles.placeholder}>Your AI-generated caption will appear here...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '90%',
    minHeight: 100,
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
  },
  placeholder: {
    color: '#888',
    fontSize: 16,
  },
});

export default CaptionDisplay;