import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.PrimaryBG,
        tabBarInactiveTintColor: Colors.Paragraph,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              source={require("../../assets/icons/home.png")}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              source={require("../../assets/icons/list.png")}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              source={require("../../assets/icons/profile.png")}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

type TabIconProps = {
  source: any;
  focused: boolean;
};

function TabIcon({ source, focused }: TabIconProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: focused ? 1.2 : 1,
        useNativeDriver: true,
        tension: 150,
        friction: 8,
      }),
      Animated.timing(opacityAnim, {
        toValue: focused ? 1 : 0.6,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [focused]);

  return (
    <View style={styles.tabIconContainer}>
      {focused && <View style={styles.activeIndicator} />}
      <Animated.View
        style={[
          styles.iconWrapper,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        <Image
          source={source}
          style={[
            styles.icon,
            {
              tintColor: focused ? Colors.SecondaryColor : Colors.Paragraph,
            },
          ]}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.PrimaryBG,
    borderTopWidth: 0,
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    height: 70,
    paddingBottom: 25,
    paddingTop: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 35,
    position: "absolute",
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    position: "relative",
  },
  activeIndicator: {
    position: "absolute",
    top: -5,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.SecondaryColor,
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
    borderRadius: 22,
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
});
