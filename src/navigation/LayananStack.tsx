import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LaynananScreem from "../screens/layanan/LayananScreen";
import LayananMedisScreen from "../screens/layanan/LayananMedis";
import LayananSDMScreen from "../screens/layanan/LayananSDM";
import LayananITScreen from "../screens/layanan/LayananIT";
import LayananUmumScreen from "../screens/layanan/LayananUmum";
import LayananKeuanganScreen from "../screens/layanan/LayananKeuangan";
import LayananDiklatScreen from "../screens/layanan/LayananDIklat";


const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LayananMain" component={LaynananScreem} />
      <Stack.Screen name="LayananMedis" component={LayananMedisScreen} />
      <Stack.Screen name="LayananSDM" component={LayananSDMScreen} />
      <Stack.Screen name="LayananIT" component={LayananITScreen} />
      <Stack.Screen name="LayananUmum" component={LayananUmumScreen} />
      <Stack.Screen name="LayananKeuangan" component={LayananKeuanganScreen} />
      <Stack.Screen name="LayananDiklat" component={LayananDiklatScreen} />
    </Stack.Navigator>
  );
}
