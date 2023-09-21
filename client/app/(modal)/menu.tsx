import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";

const menu = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  
  return (
    <View>
      <Text>menu</Text>
      <Text>Logout</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('login')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('about')}>
        <Text>about</Text>
      </TouchableOpacity>
    </View>
  );
};

export default menu;

const styles = StyleSheet.create({});
