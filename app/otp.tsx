import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Colors = {
  SecondaryColor: "#4D3FBDFF",
  Paragraph: "#666666",
  Header: "#0B0B0BFF",
  SecondaryBG: "#D1D5DB",
  PrimaryBG: "#FFFFFFFF",
  AccentColor: "#4D3FBDFF",
  BorderColor: "#e0e0e0",
  InputBG: "#fafafa",
  PlaceholderText: "#a0a0a0",
  OverLay: "rgba(0,0,0,0.5)",
};

export default function Authentication() {
  const numInputs = 4;
  const [otp, setOtp] = useState(Array(numInputs).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text.slice(-1);
    setOtp(newOtp);

    if (text && index < numInputs - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer); // Clean up on unmount
    }
  }, []);

  const handleResend = () => {
    if (canResend) {
      console.log("Resending OTP...");
      setOtp(Array(numInputs).fill(""));
      setSecondsLeft(60);
      setCanResend(false);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/authentication")}
        >
          <Image
            source={require("../assets/icons/back-arrow.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>OTP Verification</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/icons/otp.png")}
            style={styles.otpIcon}
          />
        </View>

        <Text style={styles.description}>
          We have sent a verification code to your number
        </Text>

        {/* OTP Input Container */}
        <View style={styles.otpInputContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              autoFocus={index === 0}
            />
          ))}
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          onPress={() => {
            router.push("/completeProfile");
          }}
          style={styles.verifyButton}
        >
          <Text style={styles.verifyButtonText}>Verify OTP</Text>
        </TouchableOpacity>

        {/* Resend OTP */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn’t receive an OTP? </Text>
          {canResend ? (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendLink}>Resend OTP</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.resendLink}>Resend in {secondsLeft}s</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryBG,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BorderColor,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: Colors.Header,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.Header,
    marginLeft: 15,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 30,
  },
  otpIcon: {
    width: 80,
    height: 80,
    tintColor: Colors.SecondaryColor,
  },
  description: {
    fontSize: 16,
    color: Colors.Paragraph,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
  otpInput: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.BorderColor,
    borderRadius: 8,
    backgroundColor: Colors.InputBG,
    fontSize: 18,
    fontWeight: "600",
    color: Colors.Header,
    textAlign: "center",
  },
  verifyButton: {
    backgroundColor: Colors.SecondaryColor,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  verifyButtonText: {
    color: Colors.PrimaryBG,
    fontSize: 16,
    fontWeight: "600",
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  resendText: {
    fontSize: 14,
    color: Colors.Paragraph,
  },
  resendLink: {
    fontSize: 14,
    color: Colors.SecondaryColor,
    fontWeight: "600",
  },
});
