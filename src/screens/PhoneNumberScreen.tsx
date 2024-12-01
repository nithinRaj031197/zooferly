import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/general";

type PhoneNumberScreenProps = NativeStackScreenProps<RootStackParamList, "PhoneNumberScreen">;

const PhoneNumberScreen: React.FC<PhoneNumberScreenProps> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleGetOTP = () => {
    navigation.navigate("OTPScreen", { phoneNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your phone number</Text>
      <Text style={styles.subtitle}>We have sent you a One Time Password (OTP) on this mobile number</Text>
      <InputField placeholder="Enter mobile no.*" keyboardType="phone-pad" value={phoneNumber} onChangeText={setPhoneNumber} />
      <TouchableOpacity>
        <Text style={styles.link}>Already have an account? Log in</Text>
      </TouchableOpacity>
      <Button title="Get OTP" onPress={handleGetOTP} />
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
  link: {
    color: "#007BFF",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 16,
  },
});

export default PhoneNumberScreen;
