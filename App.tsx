import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Toast from "react-native-toast-message";

export default function App() {
  return (
    <SafeAreaProvider>
      <>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
        <Toast
          config={{
            custom: ({ props }) => props.render(),
          }}
        />
      </>
    </SafeAreaProvider>
  );
}
