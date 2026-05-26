import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NotificationScreen from "../screens/notif/NotificationScreen";
import ChatScreen from "./ChatStack";
import ProfileScreen from "./ProfileStack";
import HomeScreen from "./HomeStack";
import LayananScreen from "./LayananStack";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          height: 100,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopWidth: 0,
          elevation: 10,
        },

        tabBarActiveTintColor: "#16a34a",
        tabBarInactiveTintColor: "#9ca3af",

        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Chat") {
            iconName = "chatbubble";
          } else if (route.name === "Layanan") {
            iconName = "grid";
          } else if (route.name === "Notif") {
            iconName = "notifications";
          } else if (route.name === "Profile") {
            iconName = "person";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Layanan" component={LayananScreen} />
      <Tab.Screen name="Notif" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
