import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const DonateScreen = ({ navigation }) => {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
  const [size, setSize] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleUpload = () => {
    console.log('Uploaded!');
  };

  const handleConfirm = () => {
    navigation.navigate('MenuScreen');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={text => setCategory(text)}
        style={{ marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 5, width: 300 }}
      />
      <TextInput
        placeholder="Type of Item"
        value={type}
        onChangeText={text => setType(text)}
        style={{ marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 5, width: 300 }}
      />
      <TextInput
        placeholder="Gender (male, female, unisex)"
        value={gender}
        onChangeText={text => setGender(text)}
        style={{ marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 5, width: 300 }}
      />
      <TextInput
        placeholder="Size"
        value={size}
        onChangeText={text => setSize(text)}
        style={{ marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 5, width: 300 }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
        multiline
        style={{ marginBottom: 10, paddingHorizontal: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 5, width: 300, height: 100 }}
      />
      {/* Upload Image button */}
      <Button title="Upload Image" onPress={() => console.log('Upload Image')} />
      {/* Confirm button */}
      <Button title="Confirm" onPress={handleConfirm} />
    </View>
  );
};

export default DonateScreen;
