import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/general";

type OTPVerificationScreenProps = NativeStackScreenProps<RootStackParamList, "OTPVerificationScreen">;

const OTPVerificationScreen: React.FC<OTPVerificationScreenProps> = ({ route }) => {
  const { phoneNumber, otp } = route.params;

  const handleComplete = () => {
    console.log("OTP Verified:", otp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verified</Text>
      <Text style={styles.subtitle}>Your phone number {phoneNumber} has been successfully verified!</Text>
      <Button title="Finish" onPress={handleComplete} />
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
});

export default OTPVerificationScreen;
