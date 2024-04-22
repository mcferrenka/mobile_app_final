import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('Donate');

  const handleLogin = () => {
    console.log('Logging in with:', username, password);
    if (selectedOption === 'Donate') {
      navigation.navigate('DonateScreen');
    } else {
      navigation.navigate('SearchScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.toggleButton, selectedOption === 'Donate' ? styles.selectedButton : null]}
        onPress={() => setSelectedOption('Donate')}
      >
        <Text style={styles.buttonText}>Donate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.toggleButton, selectedOption === 'Search' ? styles.selectedButton : null]}
        onPress={() => setSelectedOption('Search')}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <Button title="Submit" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.registerText}>New User? Register Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  toggleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  selectedButton: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    fontSize: 16,
  },
  registerText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;