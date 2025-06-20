import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const PlanRideScreen = () => {
  const [pickupTime, setPickupTime] = useState("Pickup now");
  const [rideFor, setRideFor] = useState("For me");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const locations = [
    {
      id: 1,
      name: "Volcano Bus Terminal",
      distance: "4.9 km",
      address: "Fs+4a Namugongo Rd, Ka...",
      type: "recent",
    },
    {
      id: 2,
      name: "Bukwenda katale Police",
      distance: "3.1 mi",
      address: "GGXF+QW5, Bukwenda",
      type: "recent",
    },
    {
      id: 3,
      name: "Food Point Restaurant",
      distance: "7.6 mi",
      address: "Entebbe Road Lake Mburo National Park, Ka...",
      type: "recent",
    },
    {
      id: 4,
      name: "Acacia Mall",
      distance: "1.0 mi",
      address: "14-18 Cooper Rd, Kampala",
      type: "recent",
    },
    {
      id: 5,
      name: "Entebbe International Airport",
      distance: "2.1 mi",
      address: "Kampala Road, Entebbe",
      type: "recent",
    },
  ];
  interface Location {
    id: number;
    name: string;
    distance: string;
    address: string;
    type: string;
  }
  interface locationItemProp {
    location: Location;
  }

  const LocationItem = ({ location }: locationItemProp) => (
    <TouchableOpacity style={styles.locationItem}>
      <View style={styles.locationIcon}>
        <Icon name="location-on" size={16} color={Colors.MediumGray} />
      </View>
      <View style={styles.locationDetails}>
        <Text style={styles.locationName}>{location.name}</Text>
        <Text style={styles.locationAddress}>{location.address}</Text>
      </View>
      <Text style={styles.locationDistance}>{location.distance}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={Colors.Header} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Plan your ride</Text>
      </View>

      {/* Ride Options */}
      <View style={styles.rideOptions}>
        <TouchableOpacity style={styles.optionButton}>
          <Icon name="person" size={20} color={Colors.Header} />
          <Text style={styles.optionText}>{rideFor}</Text>
          <Icon name="keyboard-arrow-down" size={20} color={Colors.Header} />
        </TouchableOpacity>
      </View>

      {/* Input Section */}
      <View style={styles.inputSection}>
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <View style={styles.dotIndicator} />
            <TextInput
              style={styles.input}
              placeholder="From?"
              placeholderTextColor={Colors.PlaceholderText}
              value={pickup}
              onChangeText={setPickup}
            />
          </View>
          <View style={styles.inputRow}>
            <View style={[styles.dotIndicator, styles.destinationDot]} />
            <TextInput
              style={[styles.input, styles.destinationInput]}
              placeholder="Where to?"
              placeholderTextColor={Colors.PlaceholderText}
              value={destination}
              onChangeText={setDestination}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/map-screen")}
          style={styles.addButton}
        >
          <Icon name="add" size={24} color={Colors.Header} />
        </TouchableOpacity>
      </View>

      <Text style={styles.stopsText}>Add up to 5 stops</Text>

      {/* Locations List */}
      <ScrollView
        style={styles.locationsList}
        showsVerticalScrollIndicator={false}
      >
        {locations.map((location) => (
          <LocationItem key={location.id} location={location} />
        ))}

        {/* Additional Options */}
        <TouchableOpacity style={styles.specialOption}>
          <View style={styles.specialOptionIcon}>
            <Icon name="place" size={20} color={Colors.Header} />
          </View>
          <Text style={styles.specialOptionText}>Set location on map</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryBG,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BorderColor,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.Header,
  },
  rideOptions: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.LightGray,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  optionText: {
    fontSize: 14,
    color: Colors.Header,
    fontWeight: "500",
  },
  inputSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: Colors.InputBG,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.BorderColor,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  dotIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.Header,
    marginRight: 12,
  },
  destinationDot: {
    backgroundColor: Colors.MediumGray,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.Header,
  },
  destinationInput: {
    color: Colors.Paragraph,
  },
  addButton: {
    marginLeft: 12,
    padding: 8,
  },
  stopsText: {
    fontSize: 12,
    color: Colors.MediumGray,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  locationsList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BorderColor,
  },
  locationIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.LightGray,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  locationDetails: {
    flex: 1,
  },
  locationName: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.Header,
    marginBottom: 2,
  },
  locationAddress: {
    fontSize: 14,
    color: Colors.MediumGray,
  },
  locationDistance: {
    fontSize: 12,
    color: Colors.MediumGray,
    marginTop: 2,
  },
  specialOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BorderColor,
  },
  specialOptionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.LightGray,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  specialOptionText: {
    fontSize: 16,
    color: Colors.Header,
    fontWeight: "500",
  },
});

export default PlanRideScreen;
