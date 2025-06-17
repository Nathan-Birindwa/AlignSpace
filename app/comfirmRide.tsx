import { Colors } from "@/constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { MapPressEvent, Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function MapScreen() {
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 0.3476,
    longitude: 32.5825,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalHeight] = useState(new Animated.Value(0));
  const [selectedRide, setSelectedRide] = useState("Ride-go");

  const handleMapPress = (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
  };

  const toggleModal = () => {
    if (isModalVisible) {
      Animated.timing(modalHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsModalVisible(false));
    } else {
      setIsModalVisible(true);
      Animated.timing(modalHeight, {
        toValue: SCREEN_HEIGHT * 0.65,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const rideOptions = [
    {
      id: "ride-go",
      name: "Ride Go",
      time: "1:42pm • 3 min",
      price: "UGX 19,400",
      originalPrice: "UGX 20,700",
      promotion: "50% promotion applied",
      isFaster: true,
      icon: "car-outline",
    },
    {
      id: "ride-xl",
      name: "RideXL",
      time: "3 min",
      price: "UGX 27,400",
      icon: "car-sport-outline",
    },
    {
      id: "ride-x",
      name: "RideX",
      time: "3 min",
      price: "UGX 24,700",
      originalPrice: "UGX 26,000",
      hasDiscount: true,
      icon: "car-outline",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 0.3476,
          longitude: 32.5825,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={handleMapPress}
      >
        <Marker coordinate={markerPosition}>
          <Image
            source={require("../assets/icons/pin.png")}
            style={{ width: 35, height: 35 }}
            resizeMode="contain"
          />
        </Marker>
      </MapView>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.Header} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Tap to edit your pickup or dropoff
        </Text>
      </View>

      {/* Menu Button */}
      <TouchableOpacity style={styles.menuButton} onPress={toggleModal}>
        <Ionicons name="menu" size={24} color={Colors.Header} />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={toggleModal}
      >
        <Pressable style={styles.modalOverlay} onPress={toggleModal}>
          <Animated.View
            style={[
              styles.modalContent,
              {
                height: modalHeight,
              },
            ]}
          >
            <Pressable onPress={() => {}}>
              {/* Modal Handle */}
              <View style={styles.modalHandle} />

              {/* Modal Header */}
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Choose a ride</Text>
              </View>

              {/* Promotion Banner */}
              <View style={styles.promotionBanner}>
                <MaterialIcons
                  name="local-offer"
                  size={16}
                  color={Colors.Success}
                />
                <Text style={styles.promotionText}>50% promotion applied</Text>
              </View>

              {/* Ride Options */}
              <ScrollView
                style={styles.rideContainer}
                showsVerticalScrollIndicator={false}
              >
                {rideOptions.map((ride) => (
                  <TouchableOpacity
                    key={ride.id}
                    style={[
                      styles.rideOption,
                      selectedRide === ride.id && styles.selectedRide,
                    ]}
                    onPress={() => setSelectedRide(ride.id)}
                  >
                    <View style={styles.rideIconContainer}>
                      <Ionicons
                        name={ride.icon}
                        size={32}
                        color={Colors.DarkGray}
                      />
                    </View>

                    <View style={styles.rideDetails}>
                      <View style={styles.rideHeader}>
                        <Text style={styles.rideName}>{ride.name}</Text>
                        {ride.isFaster && (
                          <View style={styles.fasterBadge}>
                            <Text style={styles.fasterText}>Faster</Text>
                          </View>
                        )}
                      </View>
                      <Text style={styles.rideTime}>{ride.time}</Text>
                    </View>

                    <View style={styles.priceContainer}>
                      <View style={styles.priceRow}>
                        {ride.hasDiscount && (
                          <MaterialIcons
                            name="local-offer"
                            size={16}
                            color={Colors.Success}
                          />
                        )}
                        <Text style={styles.ridePrice}>{ride.price}</Text>
                      </View>
                      {ride.originalPrice && (
                        <Text style={styles.originalPrice}>
                          {ride.originalPrice}
                        </Text>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {/* Payment Method */}
              <TouchableOpacity style={styles.paymentMethod}>
                <MaterialIcons
                  name="account-balance-wallet"
                  size={20}
                  color={Colors.Success}
                />
                <Text style={styles.paymentText}>Cash</Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={Colors.MediumGray}
                />
              </TouchableOpacity>

              {/* Choose Button */}
              <TouchableOpacity
                style={styles.chooseButton}
                onPress={toggleModal}
              >
                <Text style={styles.chooseButtonText}>Choose a ride</Text>
              </TouchableOpacity>
            </Pressable>
          </Animated.View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  header: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.PrimaryBG,
    marginHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButton: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 16,
    color: Colors.Header,
    flex: 1,
  },
  menuButton: {
    position: "absolute",
    top: 120,
    right: 20,
    backgroundColor: Colors.PrimaryBG,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: Colors.OverLay,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: Colors.PrimaryBG,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  modalHandle: {
    width: 40,
    height: 4,
    backgroundColor: Colors.BorderColor,
    borderRadius: 2,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  modalHeader: {
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.Header,
  },
  promotionBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.LightGray,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 20,
  },
  promotionText: {
    fontSize: 14,
    color: Colors.Success,
    marginLeft: 8,
    fontWeight: "500",
  },
  rideContainer: {
    maxHeight: 300,
  },
  rideOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.BorderColor,
    backgroundColor: Colors.PrimaryBG,
  },
  selectedRide: {
    borderColor: Colors.SecondaryColor,
    backgroundColor: Colors.LightGray,
  },
  rideIconContainer: {
    width: 50,
    alignItems: "center",
  },
  rideDetails: {
    flex: 1,
    marginLeft: 12,
  },
  rideHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rideName: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.Header,
  },
  fasterBadge: {
    backgroundColor: Colors.SecondaryColor,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  fasterText: {
    fontSize: 12,
    color: Colors.PrimaryBG,
    fontWeight: "500",
  },
  rideTime: {
    fontSize: 14,
    color: Colors.MediumGray,
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ridePrice: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.Header,
    marginLeft: 4,
  },
  originalPrice: {
    fontSize: 12,
    color: Colors.MediumGray,
    textDecorationLine: "line-through",
    marginTop: 2,
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: Colors.LightGray,
    marginTop: 10,
    marginBottom: 20,
  },
  paymentText: {
    fontSize: 16,
    color: Colors.Header,
    flex: 1,
    marginLeft: 12,
    fontWeight: "500",
  },
  chooseButton: {
    backgroundColor: Colors.Header,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  chooseButtonText: {
    color: Colors.PrimaryBG,
    fontSize: 16,
    fontWeight: "600",
  },
});
