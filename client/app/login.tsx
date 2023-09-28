import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import * as google from "expo-auth-session/providers/google"
import * as WebBrowser from "expo-web-browser"
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../db/config"


WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const [userInfo, setUserInfo] = useState();
  const [request, response, promptAsyn] = google.useAuthRequest({
    clientId: "1071674898442-nefh20p4c3rpumque22d6pd3e4bjltvg.apps.googleusercontent.com"
  });

  useEffect(() => {
if(response?.type == "success"){
  const { id_token } = response.params;
  const credential = GoogleAuthProvider.credential(id_token);
  signInWithCredential(auth, credential)
}
  },[response])

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
      <Button title="Login with Google" onPress={() => promptAsyn()}/>
      {/* Add additional UI components or navigation here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default LoginScreen;
