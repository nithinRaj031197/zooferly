import React, { useRef } from "react";
import { View, TextInput, StyleSheet, TextInputProps, KeyboardTypeOptions } from "react-native";

interface OTPInputProps {
  length: number;
  value: string;
  onChange: (otp: string) => void;
  keyboardType?: KeyboardTypeOptions;
  inputStyle?: object;
  containerStyle?: object;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, value, onChange, keyboardType = "number-pad", inputStyle, containerStyle }) => {
  const inputsRef = useRef<TextInput[]>([]);

  const handleTextChange = (text: string, index: number) => {
    const otpArray = value.split("");

    otpArray[index] = text;

    if (text.length > 0 && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    onChange(otpArray.join(""));
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace") {
      const otpArray = value.split("");

      otpArray[index] = "";

      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }

      onChange(otpArray.join(""));
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {Array.from({ length }, (_, index) => (
        <TextInput
          key={index}
          ref={(el) => (inputsRef.current[index] = el!)}
          style={[styles.input, inputStyle]}
          value={value[index] || ""}
          onChangeText={(text) => handleTextChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          maxLength={1}
          keyboardType={keyboardType}
          textAlign="center"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    fontSize: 18,
    color: "#000",
    marginHorizontal: 5,
    textAlign: "center",
  },
});

export default OTPInput;
