import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
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

type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  country: string;
  bio: string;
};

export default function CompleteProfile() {
  const [profile, setProfile] = useState<ProfileData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    country: "",
    bio: "",
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImagePicker = () => {
    Alert.alert(
      "Select Profile Photo",
      "Choose how you want to select your profile photo",
      [
        { text: "Camera", onPress: () => console.log("Open Camera") },
        { text: "Gallery", onPress: () => console.log("Open Gallery") },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };

  // const handleSaveProfile = () => {
  //   if (!profile.firstName || !profile.lastName || !profile.email) {
  //     Alert.alert("Error", "Please fill in all required fields");
  //     return;
  //   }

  //   console.log("Saving profile:", profile);
  //   Alert.alert("Success", "Profile saved successfully!");
  // };

  const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Image
            source={require("../assets/icons/back-arrow.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Complete Profile</Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/(tabs)");
          }}
        >
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Image Section */}
        <View style={styles.profileImageSection}>
          <TouchableOpacity
            style={styles.profileImageContainer}
            onPress={handleImagePicker}
          >
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
            ) : (
              <View style={styles.placeholderImage}>
                <Image
                  source={require("../assets/icons/profile.png")}
                  style={styles.cameraIcon}
                />
                <Text style={styles.addPhotoText}>Add Photo</Text>
              </View>
            )}
          </TouchableOpacity>
          <Text style={styles.profileImageHint}>
            Tap to change profile photo
          </Text>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          {/* Name Fields */}
          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>First Name *</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter first name"
                placeholderTextColor={Colors.PlaceholderText}
                value={profile.firstName}
                onChangeText={(text) => handleInputChange("firstName", text)}
              />
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Last Name *</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter last name"
                placeholderTextColor={Colors.PlaceholderText}
                value={profile.lastName}
                onChangeText={(text) => handleInputChange("lastName", text)}
              />
            </View>
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter email address"
              placeholderTextColor={Colors.PlaceholderText}
              keyboardType="email-address"
              autoCapitalize="none"
              value={profile.email}
              onChangeText={(text) => handleInputChange("email", text)}
            />
          </View>

          {/* Phone */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter phone number"
              placeholderTextColor={Colors.PlaceholderText}
              keyboardType="phone-pad"
              value={profile.phone}
              onChangeText={(text) => handleInputChange("phone", text)}
            />
          </View>

          {/* Date of Birth */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date of Birth</Text>
            <TouchableOpacity style={styles.dateInput}>
              <Text
                style={
                  profile.dateOfBirth ? styles.dateText : styles.datePlaceholder
                }
              >
                {profile.dateOfBirth || "Select date of birth"}
              </Text>
              <Image
                source={require("../assets/icons/list.png")}
                style={styles.calendarIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Gender */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.genderContainer}>
              {genderOptions.map((gender) => (
                <TouchableOpacity
                  key={gender}
                  style={[
                    styles.genderOption,
                    profile.gender === gender && styles.selectedGender,
                  ]}
                  onPress={() => handleInputChange("gender", gender)}
                >
                  <Text
                    style={[
                      styles.genderText,
                      profile.gender === gender && styles.selectedGenderText,
                    ]}
                  >
                    {gender}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Address */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              placeholderTextColor={Colors.PlaceholderText}
              value={profile.address}
              onChangeText={(text) => handleInputChange("address", text)}
            />
          </View>

          {/* City and Country */}
          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>City</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter city"
                placeholderTextColor={Colors.PlaceholderText}
                value={profile.city}
                onChangeText={(text) => handleInputChange("city", text)}
              />
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Country</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter country"
                placeholderTextColor={Colors.PlaceholderText}
                value={profile.country}
                onChangeText={(text) => handleInputChange("country", text)}
              />
            </View>
          </View>

          {/* Bio */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={[styles.input, styles.bioInput]}
              placeholder="Tell us about yourself"
              placeholderTextColor={Colors.PlaceholderText}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              value={profile.bio}
              onChangeText={(text) => handleInputChange("bio", text)}
            />
          </View>
        </View>

        {/* Complete Profile Button */}
        <TouchableOpacity
          style={styles.completeButton}
          // onPress={}
        >
          <Text style={styles.completeButtonText}>Complete Profile</Text>
        </TouchableOpacity>

        <View style={styles.bottomPadding} />
      </ScrollView>
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
    justifyContent: "space-between",
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
    flex: 1,
    textAlign: "center",
    marginHorizontal: 20,
  },
  saveButton: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.SecondaryColor,
    paddingHorizontal: 8,
  },
  scrollView: {
    flex: 1,
  },
  profileImageSection: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: Colors.InputBG,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    marginBottom: 10,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  placeholderImage: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.SecondaryBG,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.BorderColor,
    borderStyle: "dashed",
  },
  cameraIcon: {
    width: 30,
    height: 30,
    tintColor: Colors.Paragraph,
    marginBottom: 5,
  },
  addPhotoText: {
    fontSize: 12,
    color: Colors.Paragraph,
    fontWeight: "500",
  },
  profileImageHint: {
    fontSize: 14,
    color: Colors.Paragraph,
  },
  formSection: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  halfInput: {
    flex: 0.48,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.Header,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.InputBG,
    borderWidth: 1,
    borderColor: Colors.BorderColor,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.Header,
  },
  bioInput: {
    height: 100,
    paddingTop: 12,
  },
  dateInput: {
    backgroundColor: Colors.InputBG,
    borderWidth: 1,
    borderColor: Colors.BorderColor,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    color: Colors.Header,
  },
  datePlaceholder: {
    fontSize: 16,
    color: Colors.PlaceholderText,
  },
  calendarIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.Paragraph,
  },
  genderContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  genderOption: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.BorderColor,
    backgroundColor: Colors.InputBG,
  },
  selectedGender: {
    backgroundColor: Colors.SecondaryColor,
    borderColor: Colors.SecondaryColor,
  },
  genderText: {
    fontSize: 14,
    color: Colors.Paragraph,
    fontWeight: "500",
  },
  selectedGenderText: {
    color: Colors.PrimaryBG,
  },
  completeButton: {
    backgroundColor: Colors.SecondaryColor,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: 10,
  },
  completeButtonText: {
    color: Colors.PrimaryBG,
    fontSize: 16,
    fontWeight: "600",
  },
  bottomPadding: {
    height: 30,
  },
});
