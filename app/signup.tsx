import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";

export default function signup() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.mainHeader}>Create An Account</Text>
        <Text style={styles.subHeader}>
          Enter your phone number, email, or Instagram to get started
        </Text>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.navigationWrapper}>
        <View style={styles.navigationContainer}>
          <TouchableOpacity style={styles.navigationButtonInactive}>
            <Text style={styles.navigationTextInactive}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigationButtonActive}>
            <Text style={styles.navigationTextActive}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Phone Number Section */}
      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Phone Number</Text>
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity style={styles.countryCodeButton}>
            <Text style={styles.countryCodePlaceholder}>Select Country</Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="Enter phone number"
            placeholderTextColor={Colors.PlaceholderText}
            keyboardType="phone-pad"
          />
        </View>
        <Text style={styles.helperText}>
          We&apos;ll send you a verification code
        </Text>
      </View>
      <View style={styles.CountryCodeDropDown}></View>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Social Login Options */}
      <View style={styles.socialContainer}>
        <Text style={styles.socialHeader}>or use one of these options</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonEmoji}>
              <Image
                style={styles.socialIcon}
                source={{
                  uri: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
                }}
              ></Image>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonEmoji}>
              <Image
                style={styles.socialIcon}
                source={{
                  uri: "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000",
                }}
              ></Image>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          By creating an account, you agree to our{" "}
          <Text style={styles.linkText}>Terms of Service</Text> and{" "}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryBG,
    paddingHorizontal: 20,
  },

  // Header Styles
  headerContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  mainHeader: {
    fontSize: 32,
    fontWeight: "900",
    color: Colors.Header,
    marginBottom: 8,
  },
  subHeader: {
    color: Colors.Paragraph,
    fontSize: 16,
    lineHeight: 22,
  },

  // Navigation Styles
  navigationWrapper: {
    alignItems: "center",
    marginBottom: 30,
  },
  navigationContainer: {
    backgroundColor: Colors.SecondaryBG,
    flexDirection: "row",
    borderRadius: 25,
    padding: 4,
    width: "80%",
  },
  navigationButtonActive: {
    flex: 1,
    backgroundColor: Colors.PrimaryBG,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  navigationButtonInactive: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  navigationTextActive: {
    color: Colors.Header,
    fontSize: 16,
    fontWeight: "600",
  },
  navigationTextInactive: {
    color: Colors.Paragraph,
    fontSize: 16,
    fontWeight: "500",
  },

  // Phone Input Styles
  phoneInputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.BorderColor,
    borderRadius: 12,
    backgroundColor: Colors.InputBG,
    overflow: "hidden",
  },
  countryCodeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: Colors.SecondaryBG,
    borderRightWidth: 1,
    borderRightColor: Colors.BorderColor,
    minWidth: 140,
  },
  countryCodePlaceholder: {
    fontSize: 14,
    color: Colors.Paragraph,
    fontWeight: "400",
  },
  dropdownArrow: {
    fontSize: 10,
    color: Colors.Paragraph,
  },
  phoneNumberInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: Colors.Header,
  },

  // Form Styles
  formContainer: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.Header,
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.BorderColor,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    backgroundColor: Colors.InputBG,
    color: Colors.Header,
  },
  helperText: {
    fontSize: 14,
    color: Colors.Paragraph,
    marginTop: 8,
    marginLeft: 4,
  },

  // Social Login Styles
  socialContainer: {
    marginBottom: 30,
  },
  socialHeader: {
    fontSize: 16,
    color: Colors.Paragraph,
    textAlign: "center",
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  socialButton: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.BorderColor,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: Colors.PrimaryBG,
    minHeight: 80,
  },
  socialButtonEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  socialButtonText: {
    color: Colors.Header,
    fontSize: 14,
    fontWeight: "500",
  },
  actionContainer: {
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: Colors.AccentColor,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: Colors.BorderColor,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: Colors.PrimaryBG,
  },
  secondaryButtonText: {
    color: Colors.Header,
    fontSize: 16,
    fontWeight: "500",
  },

  // Divider Styles
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.BorderColor,
  },
  dividerText: {
    marginHorizontal: 16,
    color: Colors.Paragraph,
    fontSize: 14,
  },

  // Footer Styles
  footerContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 14,
    color: Colors.Paragraph,
    textAlign: "center",
    lineHeight: 20,
  },
  linkText: {
    color: Colors.AccentColor,
    fontWeight: "500",
  },
  socialIcon: {
    width: 45,
    height: 45,
    marginBottom: 8,
  },
  CountryCodeDropDown: {
    height: 1000,
    width: "100%",
    position: "absolute",
    backgroundColor: "blue",
    top: 360,
    zIndex: 50,
    borderRadius: 13,
  },
});
