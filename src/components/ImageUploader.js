import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ImageUploader = () => (
  <TouchableOpacity style={styles.container}>
    <Text style={styles.text}>Tap to Upload Image</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '90%',
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#555',
    borderStyle: 'dashed',
  },
  text: {
    color: '#fff',
  },
});

export default ImageUploader;