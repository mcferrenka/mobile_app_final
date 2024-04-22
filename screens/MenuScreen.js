import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuScreen = ({ navigation }) => {
  const handleDonateItems = () => {
    navigation.navigate('DonateScreen');
  };

  const handleSearchItems = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDonateItems}>
        <Text>Donate Items</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSearchItems}>
        <Text>Search Items</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Checkout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Logout</Text>
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
  button: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default MenuScreen;