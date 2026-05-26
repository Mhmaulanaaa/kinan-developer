import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../screens/profile/ProfileScreen";
import ChangeStatusScreen from "../screens/profile/ChangeStatusScreen";
import AccountSettingsScreen from "../screens/profile/AccountSettingsScreen";
import HelpScreen from "../screens/profile/HelpScreen";
import AboutScreen from "../screens/profile/AboutScreen";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="ChangeStatusProfile" component={ChangeStatusScreen} />
      <Stack.Screen
        name="AccountSettingsProfile"
        component={AccountSettingsScreen}
      />
      <Stack.Screen name="HelpProfile" component={HelpScreen} />
      <Stack.Screen name="AboutProfile" component={AboutScreen} />
    </Stack.Navigator>
  );
}
