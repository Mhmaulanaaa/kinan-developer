import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home/HomeScreen";
import ChatInternalScreen from "../screens/chat/ChatInternalScreen";
import InformasiScreen from "../screens/informasi/InformasiScreen";
import PengumumanScreen from "../screens/pengumuman/PengumumanScreen";
import LayananScreen from "../screens/layanan/LayananScreen";
import DokumenScreen from "../screens/dokumen/DokumenScreen";
import PanduanScreen from "../screens/panduan/PanduanScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="ChatInternalHome" component={ChatInternalScreen} />
      <Stack.Screen name="InformasiHome" component={InformasiScreen} />
      <Stack.Screen name="PengumumanHome" component={PengumumanScreen} />
      <Stack.Screen name="LayananHome" component={LayananScreen} />
      <Stack.Screen name="DokumenHome" component={DokumenScreen} />
      <Stack.Screen name="PanduanHome" component={PanduanScreen} />
    </Stack.Navigator>
  );
}
