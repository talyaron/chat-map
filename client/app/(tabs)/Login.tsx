import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function login() {

  return (
    <View style={styles.container}>
      <Button title="login With Google" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
});

export default login;
