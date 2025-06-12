import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";

function getStarted() {
  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.imageContainer}>
        <Image
          style={style.onBoarding}
          source={require("../assets/images/onboarding3.png")}
        />
      </View>
      <View style={style.container}>
        <Text style={style.Header}>Start Booking Your Ride</Text>
        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.signInButton}>
            <Text style={style.signInText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.signUpButton}>
            <Text
              onPress={() => {
                router.push("/signup");
              }}
              style={style.signUpText}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default getStarted;

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  onBoarding: {
    width: "100%",
    height: 560,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  Header: {
    fontSize: 32,
    color: Colors.SecondaryColor,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 40,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 15,
  },
  signInButton: {
    flex: 1,
    backgroundColor: Colors.SecondaryColor,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  signInText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  signUpButton: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.SecondaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    color: Colors.SecondaryColor,
    fontSize: 18,
    fontWeight: "600",
  },
});
