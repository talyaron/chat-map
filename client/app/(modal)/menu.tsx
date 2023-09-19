import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const menu = () => {
  return (
    <View>
      <Text>menu</Text>
      <Text>Logout</Text>
      <TouchableOpacity>
        <Link href="/login">Login</Link>
      </TouchableOpacity>
    </View>
  );
};

export default menu;

const styles = StyleSheet.create({});
