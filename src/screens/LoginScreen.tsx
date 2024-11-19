import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/general";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, Welcome Back! 👋</Text>
      <InputField placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <InputField placeholder="Enter Your Password" secureTextEntry value={password} onChangeText={setPassword} />
      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.rememberMe}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Button title="Login" onPress={() => console.log("Login")} />
      <Text style={styles.orWith}>Or With</Text>
      <Button title="Login with Google" onPress={() => console.log("Google Login")} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.link}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  rememberMe: {
    fontSize: 14,
    color: "#000",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#ff5c5c",
  },
  orWith: {
    textAlign: "center",
    marginVertical: 16,
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
  link: {
    fontSize: 14,
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default LoginScreen;
