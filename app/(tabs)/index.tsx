import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import {
  Bike,
  Car,
  Clock,
  MapPin,
  Package,
  Search,
  Shield,
  Star,
} from "lucide-react-native";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function UberApp() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.PrimaryBG} />

      {/* Header
      <View style={styles.header}>
        <Text style={styles.logo}>Book a ride</Text>
      </View> */}

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Section */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={25} color={Colors.PlaceholderText} />
            <TextInput
              onFocus={() => router.push("/inputLocation")}
              style={styles.searchInput}
              placeholder="Destination?"
              placeholderTextColor={Colors.PlaceholderText}
            />
          </View>
        </View>

        {/* Recent Locations */}
        <View style={styles.recentSection}>
          <TouchableOpacity style={styles.locationItem}>
            <View style={styles.locationIcon}>
              <Clock size={16} color={Colors.MediumGray} />
            </View>
            <View style={styles.locationDetails}>
              <Text style={styles.locationName}>Volcano Bus Terminal</Text>
              <Text style={styles.locationAddress}>
                54a Namirembe Rd, Kampala
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.locationItem}>
            <View style={styles.locationIcon}>
              <Clock size={16} color={Colors.MediumGray} />
            </View>
            <View style={styles.locationDetails}>
              <Text style={styles.locationName}>
                Bukwenda katale Police Post
              </Text>
              <Text style={styles.locationAddress}>6GXF+QW5, Bukwenda</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Suggestions Section */}
        <View style={styles.suggestionsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Suggestions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.servicesGrid}>
            <TouchableOpacity style={styles.serviceItem}>
              <View style={styles.promoTag}>
                <Text style={styles.promoText}>Promo</Text>
              </View>
              <View style={styles.serviceIcon}>
                <Car size={30} color={Colors.Header} />
              </View>
              <Text style={styles.serviceText}>Ride</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.serviceItem}>
              <View style={styles.serviceIcon}>
                <Bike size={30} color={Colors.Header} />
              </View>
              <Text style={styles.serviceText}>Boda</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.serviceItem}>
              <View style={styles.serviceIcon}>
                <Shield size={30} color={Colors.Header} />
              </View>
              <Text style={styles.serviceText}>Reserve</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.serviceItem}>
              <View style={styles.serviceIcon}>
                <Package size={30} color={Colors.Header} />
              </View>
              <Text style={styles.serviceText}>Courier</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Explore Section */}
        <View style={styles.exploreSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Explore</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.exploreScroll}
          >
            <TouchableOpacity style={styles.exploreCard}>
              <View style={styles.exploreImagePlaceholder}>
                <MapPin size={24} color={Colors.SecondaryColor} />
              </View>
              <View style={styles.exploreInfo}>
                <Text style={styles.exploreName}>Kampala City Centre</Text>
                <Text style={styles.exploreDistance}>2.5 km away</Text>
                <View style={styles.exploreRating}>
                  <Star
                    size={12}
                    color={Colors.Warning}
                    fill={Colors.Warning}
                  />
                  <Text style={styles.ratingText}>4.8</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.exploreCard}>
              <View style={styles.exploreImagePlaceholder}>
                <MapPin size={24} color={Colors.SecondaryColor} />
              </View>
              <View style={styles.exploreInfo}>
                <Text style={styles.exploreName}>Uganda Museum</Text>
                <Text style={styles.exploreDistance}>3.2 km away</Text>
                <View style={styles.exploreRating}>
                  <Star
                    size={12}
                    color={Colors.Warning}
                    fill={Colors.Warning}
                  />
                  <Text style={styles.ratingText}>4.6</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.exploreCard}>
              <View style={styles.exploreImagePlaceholder}>
                <MapPin size={28} color={Colors.SecondaryColor} />
              </View>
              <View style={styles.exploreInfo}>
                <Text style={styles.exploreName}>Nakasero Market</Text>
                <Text style={styles.exploreDistance}>1.8 km away</Text>
                <View style={styles.exploreRating}>
                  <Star
                    size={12}
                    color={Colors.Warning}
                    fill={Colors.Warning}
                  />
                  <Text style={styles.ratingText}>4.5</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.exploreCard}>
              <View style={styles.exploreImagePlaceholder}>
                <MapPin size={24} color={Colors.SecondaryColor} />
              </View>
              <View style={styles.exploreInfo}>
                <Text style={styles.exploreName}>Gaddafi Mosque</Text>
                <Text style={styles.exploreDistance}>4.1 km away</Text>
                <View style={styles.exploreRating}>
                  <Star
                    size={12}
                    color={Colors.Warning}
                    fill={Colors.Warning}
                  />
                  <Text style={styles.ratingText}>4.9</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: Colors.PrimaryBG,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.Header,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    gap: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.InputBG,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.Header,
  },
  laterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.InputBG,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    gap: 5,
  },
  laterText: {
    fontSize: 14,
    color: Colors.Header,
    fontWeight: "500",
  },
  recentSection: {
    marginBottom: 30,
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    gap: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Paragraph,
  },
  locationIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
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
    color: Colors.Paragraph,
  },
  suggestionsSection: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.Header,
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.SecondaryColor,
    fontWeight: "500",
  },
  servicesGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serviceItem: {
    alignItems: "center",
    position: "relative",
    width: 70,
  },
  promoTag: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: Colors.Success,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 1,
  },
  promoText: {
    fontSize: 10,
    color: Colors.PrimaryBG,
    fontWeight: "600",
  },
  serviceIcon: {
    width: 60,
    height: 60,
    backgroundColor: Colors.LightGray,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 12,
    color: Colors.Header,
    fontWeight: "500",
  },
  promoBanner: {
    backgroundColor: Colors.LightGray,
    borderRadius: 15,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    overflow: "hidden",
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.Header,
    marginBottom: 15,
    lineHeight: 24,
  },
  bookNowButton: {
    backgroundColor: Colors.Header,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "flex-start",
  },
  bookNowText: {
    fontSize: 14,
    color: Colors.PrimaryBG,
    fontWeight: "600",
  },
  promoImageContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  carPlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: Colors.Success,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  exploreSection: {
    marginBottom: 30,
  },
  exploreScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  exploreCard: {
    backgroundColor: Colors.PrimaryBG,
    borderRadius: 12,
    padding: 12,
    marginRight: 15,
    width: 140,
    borderWidth: 1,
    borderColor: Colors.BorderColor,
    shadowColor: Colors.Header,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  exploreImagePlaceholder: {
    width: "100%",
    height: 80,
    backgroundColor: Colors.LightGray,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  exploreInfo: {
    flex: 1,
  },
  exploreName: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.Header,
    marginBottom: 4,
  },
  exploreDistance: {
    fontSize: 12,
    color: Colors.Paragraph,
    marginBottom: 6,
  },
  exploreRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: Colors.Header,
    fontWeight: "500",
  },
  bottomSheet: {
    backgroundColor: Colors.PrimaryBG,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.Header,
  },
});
