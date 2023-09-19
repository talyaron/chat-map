import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const login = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Location Chat</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#777"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#777"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#007AFF', // Your theme color
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  forgotPassword: {
    color: '#007AFF', // Your theme color
    fontSize: 16,
  },
});

export default login;
