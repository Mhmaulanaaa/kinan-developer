import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/AppNavigator";

import Toast from "react-native-toast-message";

export default function App() {
  return (
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
  );
}
