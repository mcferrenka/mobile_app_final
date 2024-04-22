import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
  const handleViewPictures = () => {
    console.log('View Pictures button pressed');
  };

  const handleAddToCart = () => {
    console.log('Add to Cart button pressed');
  };

  const handleBackToMenu = () => {
    navigation.navigate('MenuScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.dropdownsContainer}>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => console.log('Category selected')}>
          <Text>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => console.log('Type selected')}>
          <Text>Type</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => console.log('Gender selected')}>
          <Text>Gender</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdownButton} onPress={() => console.log('Size selected')}>
          <Text>Size</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleViewPictures}>
        <Text>View Pictures</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleBackToMenu}>
        <Text>Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  dropdownsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dropdownButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default SearchScreen;