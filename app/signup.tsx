import countries from "@/constants/Countries";
import { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

export default function Signup() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(countries);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (text: string) => {
    setSearch(text);
    const lower = text.trim().toLowerCase();
    const filteredData = countries.filter(
      (item) =>
        item.name.toLowerCase().includes(lower) ||
        item.code.toLowerCase().includes(lower)
    );
    setFilter(filteredData);
  };

  function hideDropDown() {
    setShowDropdown(false);
  }
  function showDropdownMenu() {
    setShowDropdown(true);
  }

  return (
    <SafeAreaView style={showDropdown ? styles.overlay : styles.container}>
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
          <TouchableOpacity
            onPress={showDropdownMenu}
            style={styles.countryCodeButton}
          >
            <Text style={styles.countryCodePlaceholder}>Select Country</Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="Enter phone number"
            placeholderTextColor={Colors.PlaceholderText}
            keyboardType="name-phone-pad"
          />
        </View>
        <Text style={styles.helperText}>
          We&apos;ll send you a verification code
        </Text>
      </View>

      {/* Country Code Dropdown Modal */}
      {showDropdown ? (
        <View style={styles.CountryCodeDropDown}>
          <View style={styles.phoneSelectionContainer}>
            <Text style={styles.phoneSelectionHeader}>Select Country</Text>
            <TouchableOpacity
              onPress={hideDropDown}
              style={styles.phoneSelectionCloseButton}
            >
              <Text style={styles.phoneSelectionCloseButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Search Input */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search country by name"
              placeholderTextColor={Colors.PlaceholderText}
              keyboardType="default"
              onChangeText={handleSearch}
            />
          </View>

          {/* Countries List */}
          <ScrollView
            style={styles.countriesList}
            showsVerticalScrollIndicator={true}
            persistentScrollbar={true}
            contentContainerStyle={styles.countriesListContent}
          >
            {filter.map((country, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.countryItem,
                  index === filter.length - 1 && styles.lastCountryItem,
                ]}
              >
                <View style={styles.countryItemContent}>
                  <Text style={styles.countryFlag}>{country.flag}</Text>
                  <Text style={styles.countryName}>{country.name}</Text>
                </View>
                <Text style={styles.countryCode}>({country.code})</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={{ display: "none" }}>
          <View style={styles.phoneSelectionContainer}>
            <Text style={styles.phoneSelectionHeader}>Select Country</Text>
            <TouchableOpacity
              onPress={hideDropDown}
              style={styles.phoneSelectionCloseButton}
            >
              <Text style={styles.phoneSelectionCloseButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Search Input */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search country by name"
              placeholderTextColor={Colors.PlaceholderText}
              keyboardType="default"
              onChangeText={handleSearch}
            />
          </View>

          {/* Countries List */}
          <ScrollView
            style={styles.countriesList}
            showsVerticalScrollIndicator={true}
            persistentScrollbar={true}
            contentContainerStyle={styles.countriesListContent}
          >
            {filter.map((country, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.countryItem,
                  index === filter.length - 1 && styles.lastCountryItem,
                ]}
              >
                <View style={styles.countryItemContent}>
                  <Text style={styles.countryFlag}>{country.flag}</Text>
                  <Text style={styles.countryName}>{country.name}</Text>
                </View>
                <Text style={styles.countryCode}>({country.code})</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

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
              />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonEmoji}>
              <Image
                style={styles.socialIcon}
                source={{
                  uri: "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000",
                }}
              />
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
    backgroundColor: Colors.PrimaryBG,
    minHeight: 50,
  },
  socialButtonEmoji: {
    fontSize: 10,
    marginBottom: 8,
  },
  socialButtonText: {
    color: Colors.Header,
    fontSize: 10,
    fontWeight: "500",
  },
  actionContainer: {
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: Colors.SecondaryColor,
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
    width: 30,
    height: 30,
    marginBottom: 8,
  },

  // Country Code Dropdown Styles

  CountryCodeDropDown: {
    height: deviceHeight - 280,
    width: deviceWidth - 30,
    position: "absolute",
    top: 150,
    alignSelf: "center",
    zIndex: 50,
    borderRadius: 13,
    backgroundColor: Colors.PrimaryBG,
    borderWidth: 1,
    borderColor: Colors.SecondaryBG,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  overlay: {
    flex: 1,
    backgroundColor: Colors.OverLay,
    paddingHorizontal: 20,
  },
  phoneSelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.BorderColor,
  },
  phoneSelectionHeader: {
    fontSize: 24,
    fontWeight: "900",
    color: Colors.Header,
  },
  phoneSelectionCloseButton: {
    padding: 4,
  },
  phoneSelectionCloseButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.Paragraph,
  },

  // Search Input Styles
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: Colors.BorderColor,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: Colors.InputBG,
    color: Colors.Header,
  },

  // Countries List Styles
  countriesList: {
    flex: 1,
    padding: 20,
  },
  countriesListContent: {
    paddingBottom: 20,
    overflow: "scroll",
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BorderColor,
  },
  lastCountryItem: {
    borderBottomWidth: 0,
  },
  countryItemContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  countryFlag: {
    fontSize: 20,
    marginRight: 12,
  },
  countryName: {
    fontSize: 16,
    color: Colors.Header,
    fontWeight: "400",
    flex: 1,
  },
  countryCode: {
    fontSize: 16,
    color: Colors.Paragraph,
    fontWeight: "400",
  },
});
