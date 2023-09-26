import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Menu = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('profile')}>
        <Ionicons name="person" size={20} color="white" />
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('policy')}>
        <Ionicons name="document-text" size={20} color="white" />
        <Text style={styles.buttonText}>Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('about')}>
        <Ionicons name="information-circle" size={20} color="white" />
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
        <Ionicons name="log-in" size={20} color="white" />
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('logout')}>
        <Ionicons name="log-out" size={20} color="white" />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    top: 0, 
    height: '100%',
    width: '50%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'flex-start', 
},
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    width: '80%', 
    height: 50,
    marginBottom: 10, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 10,
    borderRadius: 2,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
});

export default Menu;