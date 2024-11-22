export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  PhoneNumberScreen: undefined;
  OTPScreen: { phoneNumber: string };
  OTPVerificationScreen: { phoneNumber: string; otp: string };
};
