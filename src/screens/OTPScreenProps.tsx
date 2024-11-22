import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/general";

type OTPScreenProps = NativeStackScreenProps<RootStackParamList, "OTPScreen">;

const OTPScreen: React.FC<OTPScreenProps> = ({ route, navigation }) => {
  const [otp, setOtp] = useState("");
  const { phoneNumber } = route.params;

  const handleSubmit = () => {
    // Navigate to OTP Verification Screen
    navigation.navigate("OTPVerificationScreen", { phoneNumber, otp });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Enter the code from the SMS we sent to {phoneNumber}</Text>
      <TextInput style={styles.otpInput} keyboardType="number-pad" placeholder="Enter OTP" value={otp} onChangeText={setOtp} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
});

export default OTPScreen;
