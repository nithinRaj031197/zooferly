import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/general";

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, "SignUp">;

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <Text style={styles.subtitle}>Connect with your friends today!</Text>
      <InputField placeholder="Enter Your Username" value={username} onChangeText={setUsername} />
      <InputField placeholder="Enter Your Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <InputField placeholder="Enter Your Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <InputField placeholder="Enter Your Password" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Sign Up" onPress={() => console.log("Sign Up")} />
      <Text style={styles.orWith}>Or With</Text>
      <Button title="Signup with Google" onPress={() => console.log("Google Signup")} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}> Login</Text>
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
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
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

export default SignUpScreen;
