import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";

import NotificationScreen from "../screens/notif/NotificationScreen";
import ChatScreen from "./ChatStack";
import ProfileScreen from "./ProfileStack";
import HomeScreen from "./HomeStack";
import LayananScreen from "./LayananStack";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          height: 70 + insets.bottom,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
          paddingTop: 10,
          borderTopWidth: 0,
          elevation: 10,
          backgroundColor: "white",
        },

        tabBarActiveTintColor: "#16a34a",
        tabBarInactiveTintColor: "#9ca3af",

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },

        tabBarIconStyle: {
          marginTop: 5,
        },

        tabBarIcon: ({ color, focused }) => {
          // Tombol tengah (Layanan)
          if (route.name === "Layanan") {
            return (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: focused ? "#16a34a" : "#f3f4f6",
                  justifyContent: "center",
                  alignItems: "center",
                  top: -20,

                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.15,
                  shadowRadius: 4,
                  elevation: 4,
                }}
              >
                <Ionicons
                  name="grid"
                  size={28}
                  color={focused ? "#fff" : "#6b7280"}
                />
              </View>
            );
          }

          let iconName: any;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;

            case "Chat":
              iconName = focused ? "chatbubble" : "chatbubble-outline";
              break;

            case "Notif":
              iconName = focused ? "notifications" : "notifications-outline";
              break;

            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
          }

          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? "#16a34a" : "#9ca3af"}
            />
          );
        },

        tabBarLabel: ({ focused, color }) => (
          <View
            style={{
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: focused ? "700" : "500",
                color,
              }}
            >
              {route.name}
            </Text>

            {focused && (
              <View
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 999,
                  backgroundColor: "#16a34a",
                  marginTop: 4,
                }}
              />
            )}
          </View>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Layanan" component={LayananScreen} />
      <Tab.Screen
        name="Notif"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notifikasi",
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
