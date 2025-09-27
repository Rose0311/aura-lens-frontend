import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ImageUploader from '../components/ImageUploader';
import CaptionDisplay from '../components/CaptionDisplay';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageUploader />
      <CaptionDisplay />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 40,
  },
});

export default HomeScreen;