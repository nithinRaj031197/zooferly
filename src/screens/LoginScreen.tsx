import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/general";
import { useTheme } from "../theme/ThemeProvider";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { theme } = useTheme();

  const handleLogin = () => {
    console.log("Login successful");
    navigation.navigate("PhoneNumberScreen");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.textPrimary }]}>Hi, Welcome Back! 👋</Text>
      <InputField placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <InputField placeholder="Enter Your Password" secureTextEntry value={password} onChangeText={setPassword} />
      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={[styles.rememberMe, { color: theme.colors.textSecondary }]}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.forgotPassword, { color: theme.colors.danger }]}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Button title="Login" onPress={handleLogin} />
      <Text style={[styles.orWith, { color: theme.colors.textSecondary }]}>Or With</Text>
      <Button title="Login with Google" onPress={() => console.log("Google Login")} />
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: theme.colors.textSecondary }]}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={[styles.link, { color: theme.colors.primary }]}> Sign Up</Text>
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
  },
  forgotPassword: {
    fontSize: 14,
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
  },
  link: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default LoginScreen;
