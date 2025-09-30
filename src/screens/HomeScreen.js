import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Import axios
import ImageUploader from '../components/ImageUploader';
import CaptionDisplay from '../components/CaptionDisplay';
import GenerateButton from '../components/GenerateButton';

// For Android Emulator, the backend is at this special address

// If using a physical device, replace with your computer's IP address
const API_URL = 'http://192.168.1.8:8000/caption';

const HomeScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // Add new state for loading and the final caption
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGeneratePress = async () => {
    if (!selectedImage) {
      Alert.alert('No image selected', 'Please select an image first.');
      return;
    }

    // Set loading to true to show the spinner
    setLoading(true);
    setCaption('');

    // Create a FormData object to send the image
    const formData = new FormData();
    formData.append('file', {
      uri: selectedImage.uri,
      type: selectedImage.type,
      name: selectedImage.fileName,
    });

    try {
      // Send the image to the backend
      const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Save the caption from the response
      setCaption(response.data.caption);
    } catch (error) {
      console.error('Error uploading image: ', error);
      Alert.alert('Error', 'Failed to generate caption. Please try again.');
    } finally {
      // Set loading back to false
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageUploader image={selectedImage} onImageSelected={setSelectedImage} />
      {/* Pass the new state down to the display component */}
      <CaptionDisplay caption={caption} loading={loading} />
      {/* Disable the button while loading */}
      <GenerateButton onPress={handleGeneratePress} disabled={!selectedImage || loading} />
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