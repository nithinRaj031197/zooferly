import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/general";
import OTPInput from "../components/OtpTnput";

type OTPScreenProps = NativeStackScreenProps<RootStackParamList, "OTPScreen">;

const OTPScreen: React.FC<OTPScreenProps> = ({ route, navigation }) => {
  const [otp, setOtp] = useState("");
  const { phoneNumber } = route.params;

  const handleSubmit = () => {
    navigation.navigate("OTPVerificationScreen", { phoneNumber, otp });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Enter the code from the SMS we sent to {phoneNumber}</Text>
      <OTPInput length={6} value={otp} onChange={setOtp} inputStyle={styles.otpInput} containerStyle={styles.otpContainer} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: 24,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    width: 45,
    height: 50,
    fontSize: 18,
    textAlign: "center",
  },
});

export default OTPScreen;
