import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const CaptionDisplay = ({ caption, loading }) => (
  <View style={styles.container}>
    {loading ? (
      <ActivityIndicator size="large" color="#1E90FF" />
    ) : (
      <Text style={styles.text}>
        {caption || 'Your AI-generated caption will appear here...'}
      </Text>
    )}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default CaptionDisplay;