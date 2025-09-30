// src/components/ImageUploader.js
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

// It now receives props from its parent (HomeScreen)
const ImageUploader = ({ image, onImageSelected }) => {
  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        // Call the function passed from the parent with the selected image data
        onImageSelected(response.assets[0]);
      }
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleImagePick}>
      {image ? (
        <Image source={{ uri: image.uri }} style={styles.image} />
      ) : (
        <Text style={styles.text}>Tap to Upload Image</Text>
      )}
    </TouchableOpacity>
  );
};

// Styles remain the same
const styles = StyleSheet.create({
  container: {
    height: 200,
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
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default ImageUploader;